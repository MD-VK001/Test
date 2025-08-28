// =================================================================================
// GLOBAL STATE AND CONFIGURATION
// =================================================================================

// Icon mapping for fungi categories
const fungiIconMap = {
    // Classification
    "Systemic": "location-dot",
    "Cutaneous": "paint-roller",
    "Opportunistic": "head-side-virus",

    // Morphology
    "Dimorphic": "temperature-half",
    "Mold": "branching",
    "Yeast": "circle-dot",
    "Yeast (Pseudohyphae and Germ Tubes)": "circle-dot",
    "Atypical Fungus (Yeast-like)": "circle-question",

    // Affected Systems
    "Respiratory": "lungs",
    "Reticuloendothelial System": "retic",
    "Multisystem": "person",
    "Integumentary (Skin)": "hand",
    "Musculoskeletal (Bone)": "bone",
    "Nervous System": "brain",
    "Mucocutaneous": "ent",
    "Lymphatic System": "share-alt",
    "Genitourinary": "renal",
    "Cardiovascular": "heart",
    "Nasal/Sinus": "ent",
    "Integumentary (Skin, Hair, Nails)": "hand",
    "Ocular": "eye",
    "Hepatic": "liver",
    "Biliary": "liver",

    // Transmission
    "Inhalation of spores": "wind",
    "Commensal": "handshake",
    "Traumatic inoculation": "syringe",
    "Direct Contact": "handshake",
    "Fomites": "box",
    "Airborne": "wind",

    // Diagnosis
    "Urine/Serum Antigen Test": "vial",
    "Culture": "flask-vial",
    "Microscopy": "microscope",
    "KOH Mount": "vial-virus",
    "India Ink Stain": "tint",
    "Cryptococcal Antigen Test": "vial-virus",
    "Microscopy (Biopsy)": "scalpel",
    "Microscopy (Stain of BAL fluid)": "lungs",
    "Galactomannan Assay": "vial-virus",
    "Serology": "vial",

    // Treatment
    "Itraconazole": "pills",
    "Amphotericin B": "pills",
    "Fluconazole": "pills",
    "Potassium Iodide": "pills",
    "Topical Azoles": "spray-can",
    "Terbinafine": "pills",
    "Griseofulvin": "pills",
    "Topical Selenium Sulfide": "spray-can",
    "Nystatin": "pills",
    "Echinocandins": "pills",
    "Voriconazole": "pills",
    "Flucytosine": "pills",
    "Surgical Debridement": "scalpel",
    "Trimethoprim-Sulfamethoxazole (TMP-SMX)": "pills",

    // Prevention
    "Avoid high-risk areas (e.g., bat caves, bird roosts)": "ban",
    "Avoid soil disruption in endemic areas": "ban",
    "Avoid dust exposure in endemic areas": "ban",
    "Wear protective gloves during gardening": "hand",
    "Hygiene": "soap",
    "Keep skin dry": "sun",
    "Prophylaxis in high-risk patients": "user-shield",
    "HEPA filters for high-risk patients": "filter",
    "Control underlying conditions (e.g., diabetes)": "heart-pulse",
    "TMP-SMX Prophylaxis": "pills",
    "Unknown": "circle-question",

    // General icons
    "fungus": "mushroom",
    "search": "search",
    "close": "times",
    "filter": "filter",
    "info-circle": "info-circle",
    "exchange-alt": "exchange-alt",
    "shield-alt": "shield-alt",
    "lightbulb": "lightbulb"
};

const allFungi = typeof fungiData !== 'undefined' ? fungiData : [];
let activeFilters = {
    classification: "all",
    morphology: null,
    affectedSystems: null,
    transmission: null,
    diagnosis: null,
    treatment: null,
    prevention: null
};
let searchTerm = "";
let searchSuggestions = [];

// =================================================================================
// ICON HELPER FUNCTION
// =================================================================================
function getIconSVG(iconName, className = '') {
    // Use a default icon if the requested one is not found
    const finalIconName = fungiIconMap[iconName] || 'circle-question';
    return `<img src="FA/svg/${finalIconName}.svg" class="icon ${className}" alt="${iconName}">`;
}

// =================================================================================
// THEME TOGGLE FUNCTIONALITY
// =================================================================================
function setupThemeToggle() {
    const themeCheckbox = document.getElementById('theme-checkbox');
    const savedTheme = localStorage.getItem('theme');
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

    if (savedTheme === 'light' || (!savedTheme && !prefersDarkScheme.matches)) {
        document.body.classList.add('light-mode');
        if (themeCheckbox) themeCheckbox.checked = true;
    } else {
        if (themeCheckbox) themeCheckbox.checked = false;
    }

    if (themeCheckbox) {
        themeCheckbox.addEventListener('change', () => {
            if (themeCheckbox.checked) {
                document.body.classList.add('light-mode');
                localStorage.setItem('theme', 'light');
            } else {
                document.body.classList.remove('light-mode');
                localStorage.setItem('theme', 'dark');
            }
        });
    }
}

// =================================================================================
// CORE FILTERING AND RENDERING LOGIC
// =================================================================================

function applyFiltersAndRender() {
    const filteredFungi = getFilteredFungi();
    
    updateAllTagHighlights();
    renderMorphologyTags();
    renderAdditionalTags(filteredFungi);
    updateTagAvailability(filteredFungi);
    renderFungiGrid(filteredFungi);
    updateSelectedTags();
}

function getFilteredFungi() {
    return allFungi.filter(fungus => {
        if (activeFilters.classification !== 'all' && fungus.classification !== activeFilters.classification) return false;
        
        if (activeFilters.morphology && fungus.morphology !== activeFilters.morphology) return false;
        
        const arrayProps = ['affectedSystems', 'transmission', 'diagnosis', 'treatment', 'prevention'];
        for (const prop of arrayProps) {
            if (activeFilters[prop] && (!fungus[prop] || !fungus[prop].includes(activeFilters[prop]))) return false;
        }
        
        if (searchTerm) {
            const fungusNameLower = fungus.name.toLowerCase();
            const classificationLower = fungus.classification.toLowerCase();
            const morphologyLower = fungus.morphology ? fungus.morphology.toLowerCase() : '';
            
            if (!fungusNameLower.includes(searchTerm) && 
                !classificationLower.includes(searchTerm) && 
                !morphologyLower.includes(searchTerm)) return false;
        }
        
        return true;
    });
}

function updateAllTagHighlights() {
    const allTags = document.querySelectorAll('.tag[data-tag-group]');
    allTags.forEach(tag => {
        const group = tag.dataset.tagGroup;
        const value = tag.dataset.tagValue;
        tag.classList.toggle('active', activeFilters[group] === value);
    });
}

function updateTagAvailability(currentlyVisibleFungi) {
    const allTags = document.querySelectorAll('.tag[data-tag-group]:not([data-tag-group="morphology"])');
    allTags.forEach(tag => {
        const group = tag.dataset.tagGroup;
        const value = tag.dataset.tagValue;
        let isPossible;
        
        if (['affectedSystems', 'transmission', 'diagnosis', 'treatment', 'prevention'].includes(group)) {
            isPossible = currentlyVisibleFungi.some(fungus => 
                fungus[group] && fungus[group].includes(value)
            );
        } else {
            isPossible = currentlyVisibleFungi.some(fungus => fungus[group] === value);
        }
        
        tag.classList.toggle('disabled', !isPossible);
    });
}

function renderMorphologyTags() {
    const morphologyContainer = document.getElementById('morphology-tags');
    morphologyContainer.innerHTML = '';

    const potentialFungi = allFungi.filter(fungus => {
        if (activeFilters.classification !== 'all' && fungus.classification !== activeFilters.classification) return false;
        return true;
    });

    const availableMorphologies = [...new Set(potentialFungi.map(fungus => fungus.morphology))].filter(Boolean);
    availableMorphologies.sort();

    availableMorphologies.forEach(morphology => {
        const tag = document.createElement('div');
        tag.className = 'tag morphology-tag';
        tag.dataset.tagGroup = 'morphology';
        tag.dataset.tagValue = morphology;
        tag.innerHTML = `${getIconSVG(morphology, 'tag-icon')} ${morphology}`;
        if (activeFilters.morphology === morphology) {
            tag.classList.add('active');
        }
        morphologyContainer.appendChild(tag);
    });
}

function renderAdditionalTags(filteredFungi) {
    const affectedSystems = [...new Set(filteredFungi.flatMap(p => p.affectedSystems || []))];
    const transmission = [...new Set(filteredFungi.flatMap(p => p.transmission || []))];
    const diagnosis = [...new Set(filteredFungi.flatMap(p => p.diagnosis || []))];
    const treatment = [...new Set(filteredFungi.flatMap(p => p.treatment || []))];
    const prevention = [...new Set(filteredFungi.flatMap(p => p.prevention || []))];
    
    renderTagGroup('affected-systems-tags', affectedSystems, 'affectedSystems');
    renderTagGroup('transmission-tags', transmission, 'transmission');
    renderTagGroup('diagnosis-tags', diagnosis, 'diagnosis');
    renderTagGroup('treatment-tags', treatment, 'treatment');
    renderTagGroup('prevention-tags', prevention, 'prevention');
}

function renderTagGroup(containerId, values, group) {
    const container = document.getElementById(containerId);
    container.innerHTML = '';
    
    values.sort().forEach(value => {
        const tag = document.createElement('div');
        tag.className = 'tag feature-tag';
        tag.dataset.tagGroup = group;
        tag.dataset.tagValue = value;
        
        tag.innerHTML = `${getIconSVG(value, 'tag-icon')} ${value}`;
        
        if (activeFilters[group] === value) {
            tag.classList.add('active');
        }
        container.appendChild(tag);
    });
}

function renderFungiGrid(fungiToRender) {
    const grid = document.getElementById("fungi-grid");
    grid.innerHTML = "";
    if (fungiToRender.length === 0) {
        grid.innerHTML = `<div class="no-results">${getIconSVG('search')} No fungi match your current filters.</div>`;
        return;
    }
    fungiToRender.forEach(fungus => {
        const fungusCard = createFungusCard(fungus);
        grid.appendChild(fungusCard);
    });
}

function createFungusCard(fungus) {
    const card = document.createElement("div");
    card.className = `fungus-card ${fungus.classification.toLowerCase()}`;
    card.tabIndex = 0;
    card.dataset.name = fungus.name;
    
    const createSmallTag = (label) => {
        if (!label) return '';
        return `<div class="small-tag">${getIconSVG(label, 'small-tag-icon')} ${label}</div>`;
    };
    
    card.innerHTML = `
        <div class="fungus-name">${getIconSVG('fungus', 'fungus-icon')} ${fungus.name}</div>
        <p class="fungus-classification">${getIconSVG(fungus.classification, 'classification-icon')} ${fungus.classification}</p>
        <p class="fungus-morphology">${getIconSVG(fungus.morphology, 'morphology-icon')} ${fungus.morphology}</p>
        <div class="tag-container-small">
            ${createSmallTag(fungus.classification)}
            ${createSmallTag(fungus.morphology)}
        </div>`;
    
    card.addEventListener('click', () => showFungusDetails(fungus));
    card.addEventListener('keydown', e => {
        if (e.key === 'Enter' || e.key === ' ') {
            showFungusDetails(fungus);
            e.preventDefault();
        }
    });
    
    return card;
}

function showFungusDetails(fungus) {
    const detailContent = document.getElementById('detail-content');
    
    const createListItems = (items) => {
        if (!items || items.length === 0) return '';
        return items.map(item => `<li>${getIconSVG(item, 'list-icon')} ${item}</li>`).join('');
    };
    
    const getSectionIcon = (category) => {
        const icons = {
            'Classification Details': 'info-circle',
            'Affected Systems': 'lungs',
            'Transmission': 'exchange-alt',
            'Diagnosis': 'microscope',
            'Treatment': 'pills',
            'Prevention': 'shield-alt'
        };
        return getIconSVG(icons[category] || 'info-circle', 'section-icon');
    };
    
    detailContent.innerHTML = `
        <div class="fungus-name-detail">${getIconSVG('fungus', 'detail-fungus-icon')} ${fungus.name}</div>
        <div class="detail-icon-section">
            <div class="detail-icon">${getIconSVG(fungus.classification, 'detail-icon-img')}<span class="detail-icon-label">${fungus.classification}</span></div>
            <div class="detail-icon">${getIconSVG(fungus.morphology, 'detail-icon-img')}<span class="detail-icon-label">${fungus.morphology}</span></div>
        </div>
        <div class="detail-section">
            <h3>${getSectionIcon('Classification Details')} Classification Details</h3>
            <p><span class="key-point">Classification:</span> ${fungus.classification}</p>
            <p><span class="key-point">Morphology:</span> ${fungus.morphology}</p>
        </div>
        ${fungus.detail || ''}
        ${fungus.affectedSystems && fungus.affectedSystems.length > 0 ? `
        <div class="detail-section">
            <h3>${getSectionIcon('Affected Systems')} Affected Systems</h3>
            <ul>${createListItems(fungus.affectedSystems)}</ul>
        </div>` : ''}
        ${fungus.transmission && fungus.transmission.length > 0 ? `
        <div class="detail-section">
            <h3>${getSectionIcon('Transmission')} Transmission</h3>
            <ul>${createListItems(fungus.transmission)}</ul>
        </div>` : ''}
        ${fungus.diagnosis && fungus.diagnosis.length > 0 ? `
        <div class="detail-section">
            <h3>${getSectionIcon('Diagnosis')} Diagnosis</h3>
            <ul>${createListItems(fungus.diagnosis)}</ul>
        </div>` : ''}
        ${fungus.treatment && fungus.treatment.length > 0 ? `
        <div class="detail-section">
            <h3>${getSectionIcon('Treatment')} Treatment</h3>
            <ul>${createListItems(fungus.treatment)}</ul>
        </div>` : ''}
        ${fungus.prevention && fungus.prevention.length > 0 ? `
        <div class="detail-section">
            <h3>${getSectionIcon('Prevention')} Prevention</h3>
            <ul>${createListItems(fungus.prevention)}</ul>
        </div>` : ''}
        <div class="pro-tip">${getIconSVG('lightbulb', 'tip-icon')} <strong>Pro Tip:</strong> Use the filter options to explore other fungi with similar characteristics.</div>`;
    
    const detailTab = document.getElementById('detail-tab');
    detailTab.style.display = 'block';
    detailTab.scrollTop = 0;
}

function updateSelectedTags() {
    const container = document.getElementById("selected-tags");
    const activeFiltersArray = [];
    
    for (const group in activeFilters) {
        if (activeFilters[group] && group !== 'classification') {
            activeFiltersArray.push({
                group: group,
                value: activeFilters[group]
            });
        }
    }
    
    container.innerHTML = activeFiltersArray.length === 0
        ? `<div class="selected-tag"><span>No filters selected</span></div>`
        : activeFiltersArray.map(filter => {
            return `<div class="selected-tag" data-group-to-remove="${filter.group}">
                <span>${getIconSVG(filter.value, 'selected-tag-icon')} ${filter.group}: ${filter.value}</span>
                ${getIconSVG('close', 'remove-icon')}
            </div>`;
        }).join('');
        
    document.querySelectorAll("#selected-tags .selected-tag").forEach(tagElement => {
        tagElement.addEventListener("click", function() {
            const groupToRemove = this.dataset.groupToRemove;
            activeFilters[groupToRemove] = null;
            applyFiltersAndRender();
        });
    });
}

// =================================================================================
// SEARCH FUNCTIONALITY
// =================================================================================

function generateSearchSuggestions(searchText) {
    if (searchText.length < 2) return [];
    
    const suggestions = new Set();
    const searchLower = searchText.toLowerCase();
    
    allFungi.forEach(fungus => {
        if (fungus.name.toLowerCase().includes(searchLower)) suggestions.add(fungus.name);
        if (fungus.classification.toLowerCase().includes(searchLower)) suggestions.add(fungus.classification);
        if (fungus.morphology && fungus.morphology.toLowerCase().includes(searchLower)) suggestions.add(fungus.morphology);
        
        ['affectedSystems', 'transmission', 'diagnosis', 'treatment', 'prevention'].forEach(prop => {
            if (fungus[prop]) {
                fungus[prop].forEach(item => {
                    if (item.toLowerCase().includes(searchLower)) suggestions.add(item);
                });
            }
        });
    });
    
    return Array.from(suggestions).slice(0, 5);
}

function showSearchSuggestions() {
    const suggestionsContainer = document.getElementById('search-suggestions');
    suggestionsContainer.innerHTML = '';
    
    if (searchSuggestions.length === 0) {
        suggestionsContainer.style.display = 'none';
        return;
    }
    
    searchSuggestions.forEach(suggestion => {
        const suggestionElement = document.createElement('div');
        suggestionElement.className = 'search-suggestion';
        suggestionElement.innerHTML = `${getIconSVG(suggestion, 'suggestion-icon')} ${suggestion}`;
        
        suggestionElement.addEventListener('click', () => {
            document.getElementById('search-input').value = suggestion;
            searchTerm = suggestion.toLowerCase();
            suggestionsContainer.style.display = 'none';
            applyFiltersAndRender();
        });
        suggestionsContainer.appendChild(suggestionElement);
    });
    
    suggestionsContainer.style.display = 'block';
}

// =================================================================================
// EVENT HANDLERS
// =================================================================================

function handleClassificationChange(e) {
    const clickedButton = e.target.closest('.category-btn');
    if (!clickedButton) return;

    document.querySelectorAll('#primary-filter-container .category-btn').forEach(btn => btn.classList.remove('active'));
    clickedButton.classList.add('active');
    activeFilters.classification = clickedButton.dataset.classification;
    
    applyFiltersAndRender();
}

function handleTagClick(e) {
    const clickedTag = e.target.closest('.tag');
    if (!clickedTag || clickedTag.classList.contains('disabled')) return;

    const group = clickedTag.dataset.tagGroup;
    const value = clickedTag.dataset.tagValue;

    if (activeFilters[group] === value) {
        activeFilters[group] = null;
    } else {
        activeFilters[group] = value;
    }

    applyFiltersAndRender();
}

function clearAllFilters() {
    activeFilters = { 
        classification: "all", 
        morphology: null,
        affectedSystems: null,
        transmission: null,
        diagnosis: null,
        treatment: null,
        prevention: null
    };
    searchTerm = "";
    document.getElementById('search-input').value = '';
    document.querySelectorAll('#primary-filter-container .category-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelector('.category-btn[data-classification="all"]').classList.add('active');
    document.getElementById('search-suggestions').style.display = 'none';
    
    applyFiltersAndRender();
}

// =================================================================================
// INITIALIZATION
// =================================================================================

document.addEventListener('DOMContentLoaded', () => {
    if (allFungi.length === 0) {
        document.getElementById('fungi-grid').innerHTML = `<div class="no-results">Error: fungiData.js could not be loaded.</div>`;
        return;
    }
    
    setupThemeToggle();
    applyFiltersAndRender();
    
    document.getElementById('primary-filter-container').addEventListener('click', handleClassificationChange);
    
    document.querySelectorAll('.tag-container').forEach(container => {
        container.addEventListener('click', handleTagClick);
    });
    
    document.getElementById('clear-btn').addEventListener('click', clearAllFilters);
    
    const searchInput = document.getElementById('search-input');
    searchInput.addEventListener('input', function() {
        searchTerm = this.value.toLowerCase().trim();
        searchSuggestions = searchTerm.length > 1 ? generateSearchSuggestions(searchTerm) : [];
        showSearchSuggestions();
        applyFiltersAndRender();
    });
    
    document.addEventListener('click', (e) => {
        if (!e.target.closest('#search-container')) {
            document.getElementById('search-suggestions').style.display = 'none';
        }
    });
    
    const detailTab = document.getElementById('detail-tab');
    document.getElementById('close-detail-tab').addEventListener('click', () => {
        detailTab.style.display = 'none';
    });
    
    detailTab.addEventListener('click', (e) => {
        if (e.target === detailTab) {
            detailTab.style.display = 'none';
        }
    });
});
