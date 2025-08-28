const fungiData = [
  // =================================================================
  // Systemic Mycoses
  // =================================================================
  {
    name: "Histoplasma capsulatum",
    classification: "Systemic",
    morphology: "Dimorphic",
    affectedSystems: ["Respiratory", "Reticuloendothelial System", "Multisystem"],
    transmission: ["Inhalation of spores"],
    diagnosis: ["Urine/Serum Antigen Test", "Culture", "Microscopy"],
    treatment: ["Itraconazole", "Amphotericin B"],
    prevention: ["Avoid high-risk areas (e.g., bat caves, bird roosts)"],
    detail: `
      <div class="detail-section">
        <h3>Key Features</h3>
        <p>This dimorphic fungus is endemic to the Ohio and Mississippi River valleys. It is found in soil contaminated with bird or bat droppings. It exists as a mold in the soil and as a small, budding yeast in the body. [1, 2, 4]</p>
      </div>
      <div class="detail-section">
        <h3>Life-Cycle and Transmission</h3>
        <p>Infection occurs by inhaling microconidia (spores) from disturbed soil. [1, 2] In the lungs, the spores convert to the yeast form at body temperature. [4] The yeast are then phagocytosed by alveolar macrophages, where they can survive and replicate, leading to dissemination throughout the reticuloendothelial system (liver, spleen, bone marrow). [1, 4]</p>
      </div>
      <div class="detail-section">
        <h3>Pathogenesis</h3>
        <p>Most infections are asymptomatic or cause a mild, self-limiting pneumonia resembling influenza. [1] In immunocompromised individuals, it can cause severe, progressive disseminated disease with hepatosplenomegaly, pancytopenia, and ulcerations. [2] Chronic pulmonary histoplasmosis can occur in patients with underlying lung disease, like emphysema, mimicking tuberculosis. [1]</p>
      </div>
      <div class="detail-section">
        <h3>Diagnosis and Treatment</h3>
        <p>The most rapid diagnostic method is the detection of Histoplasma antigen in urine or serum via ELISA. [1, 2] Microscopy of tissue samples may show small, oval yeast cells within macrophages. [4] Culture is the gold standard but can take several weeks. [2] Treatment for mild-to-moderate disease is itraconazole, while severe or disseminated disease requires amphotericin B. [1, 2]</p>
      </div>
    `
  },
  {
    name: "Blastomyces dermatitidis",
    classification: "Systemic",
    morphology: "Dimorphic",
    affectedSystems: ["Respiratory", "Integumentary (Skin)", "Musculoskeletal (Bone)"],
    transmission: ["Inhalation of spores"],
    diagnosis: ["Microscopy", "Culture", "Urine Antigen Test"],
    treatment: ["Itraconazole", "Amphotericin B"],
    prevention: ["Avoid soil disruption in endemic areas"],
    detail: `
      <div class="detail-section">
        <h3>Key Features</h3>
        <p>This dimorphic fungus is endemic to the Eastern and Central United States, particularly the Ohio-Mississippi River valley and the Great Lakes region. [1, 2] It is found in soil and decaying organic matter. [1] In tissue, it appears as a large yeast with a single, broad-based bud. [1, 2, 4]</p>
      </div>
      <div class="detail-section">
        <h3>Life-Cycle and Transmission</h3>
        <p>Infection is acquired by inhaling spores from the environment. [1, 2] The spores convert to the yeast form in the lungs. From the lungs, the yeast can disseminate through the bloodstream to other parts of the body, most commonly the skin and bones. [1, 2]</p>
      </div>
      <div class="detail-section">
        <h3>Pathogenesis</h3>
        <p>Blastomycosis can present as an acute or chronic pneumonia. [1] Extrapulmonary dissemination is common. Skin lesions are a hallmark, often appearing as verrucous (wart-like) or ulcerative lesions with irregular borders. [1, 2] Osteomyelitis (bone infection) is another frequent manifestation. [1] The disease can affect both immunocompetent and immunocompromised hosts. [2]</p>
      </div>
      <div class="detail-section">
        <h3>Diagnosis and Treatment</h3>
        <p>Diagnosis is often made by direct microscopic visualization of the characteristic large, broad-based budding yeast in sputum or tissue samples. [1, 2] Culture is definitive. [2] A urine antigen test is also available. [1] Treatment for mild-to-moderate disease is itraconazole, while severe pulmonary or disseminated disease requires amphotericin B. [1, 2]</p>
      </div>
    `
  },
  {
    name: "Coccidioides immitis",
    classification: "Systemic",
    morphology: "Dimorphic",
    affectedSystems: ["Respiratory", "Integumentary (Skin)", "Nervous System", "Musculoskeletal (Bone)"],
    transmission: ["Inhalation of spores"],
    diagnosis: ["Microscopy", "Culture", "Serology"],
    treatment: ["Fluconazole", "Itraconazole", "Amphotericin B"],
    prevention: ["Avoid dust exposure in endemic areas"],
    detail: `
      <div class="detail-section">
        <h3>Key Features</h3>
        <p>This dimorphic fungus causes coccidioidomycosis, also known as "Valley Fever." It is endemic to the arid, alkaline soils of the Southwestern United States (Arizona, California) and parts of Mexico. [1, 2, 4] It exists as a mold in the soil and as a large spherule containing endospores in tissue. [1, 2, 4]</p>
      </div>
      <div class="detail-section">
        <h3>Life-Cycle and Transmission</h3>
        <p>Infection occurs by inhaling airborne arthroconidia (spores) from disturbed soil. [1, 2] In the lungs, the arthroconidia transform into large spherules. These spherules mature and rupture, releasing hundreds of endospores, each capable of forming a new spherule, leading to dissemination. [1, 4]</p>
      </div>
      <div class="detail-section">
        <h3>Pathogenesis</h3>
        <p>Most infections are asymptomatic. Symptomatic infection often presents as a self-limiting, flu-like illness or community-acquired pneumonia. [1, 2] Disseminated disease is more likely in immunocompromised individuals, pregnant women, and certain ethnic groups (e.g., Filipinos, African Americans). [1, 2] Dissemination can lead to skin lesions, bone and joint infections, and the most feared complication, coccidioidal meningitis. [1, 2]</p>
      </div>
      <div class="detail-section">
        <h3>Diagnosis and Treatment</h3>
        <p>Diagnosis can be made by identifying the large spherules with endospores in tissue or sputum. [2] Culture is definitive but hazardous due to the highly infectious nature of the mold form. [2] Serology (detecting IgM and IgG antibodies) is a key diagnostic tool. [1, 2] Treatment for severe or disseminated disease involves azoles (fluconazole, itraconazole) or amphotericin B. [1, 2]</p>
      </div>
    `
  },
  {
    name: "Paracoccidioides brasiliensis",
    classification: "Systemic",
    morphology: "Dimorphic",
    affectedSystems: ["Respiratory", "Integumentary (Skin)", "Mucocutaneous", "Lymphatic System"],
    transmission: ["Inhalation of spores"],
    diagnosis: ["Microscopy", "Culture"],
    treatment: ["Itraconazole", "Amphotericin B"],
    prevention: ["Unknown"],
    detail: `
      <div class="detail-section">
        <h3>Key Features</h3>
        <p>This dimorphic fungus causes paracoccidioidomycosis and is endemic to Central and South America. [1, 2] In tissue, it is known for its distinctive "mariner's wheel" or "pilot's wheel" appearance, which is a large mother yeast cell surrounded by multiple smaller budding daughter cells. [1, 2, 4]</p>
      </div>
      <div class="detail-section">
        <h3>Life-Cycle and Transmission</h3>
        <p>The fungus is thought to reside in the soil, and infection is acquired through inhalation of conidia. [1, 2] The disease has a long latency period and predominantly affects adult males, particularly agricultural workers, suggesting hormonal factors may inhibit the yeast transformation in females. [1, 2]</p>
      </div>
      <div class="detail-section">
        <h3>Pathogenesis</h3>
        <p>The infection begins in the lungs and can remain dormant for years. [1] Reactivation can lead to chronic disease. The most common presentation involves dissemination from the lungs to mucocutaneous sites, causing painful ulcers in the mouth, nose, and gastrointestinal tract. [1, 2] Lymph node involvement is also very common. [1]</p>
      </div>
      <div class="detail-section">
        <h3>Diagnosis and Treatment</h3>
        <p>Diagnosis is made by direct microscopic examination of sputum or tissue scrapings, revealing the pathognomonic "mariner's wheel" budding yeast. [1, 2] Culture is also used. [2] The treatment of choice for most cases is itraconazole, with amphotericin B reserved for severe infections. [1, 2]</p>
      </div>
    `
  },

  // =================================================================
  // Cutaneous Mycoses
  // =================================================================
  {
    name: "Dermatophytes (Trichophyton, Microsporum, Epidermophyton)",
    classification: "Cutaneous",
    morphology: "Mold",
    affectedSystems: ["Integumentary (Skin, Hair, Nails)"],
    transmission: ["Direct Contact", "Fomites"],
    diagnosis: ["KOH Mount", "Culture"],
    treatment: ["Topical Azoles", "Terbinafine", "Griseofulvin"],
    prevention: ["Hygiene", "Keep skin dry"],
    detail: `
      <div class="detail-section">
        <h3>Key Features</h3>
        <p>The dermatophytes are a group of fungi that cause superficial infections of the skin, hair, and nails, collectively known as tinea or ringworm. [1, 2] They are keratinophilic, meaning they metabolize keratin. [1, 4] The three main genera are Trichophyton, Microsporum, and Epidermophyton. [1, 2]</p>
      </div>
      <div class="detail-section">
        <h3>Pathogenesis</h3>
        <p>These fungi invade the stratum corneum of the skin or other keratinized tissues like hair and nails. [1] They do not typically invade deeper tissues. The resulting disease is named based on the affected body part:</p>
        <ul>
          <li><strong>Tinea corporis:</strong> Ringworm of the body, classic "ring-shaped" lesion. [1]</li>
          <li><strong>Tinea cruris:</strong> "Jock itch," infection of the groin. [1]</li>
          <li><strong>Tinea pedis:</strong> "Athlete's foot," infection of the feet. [1]</li>
          <li><strong>Tinea capitis:</strong> Infection of the scalp and hair. [1]</li>
          <li><strong>Tinea unguium:</strong> Onychomycosis, infection of the nails. [1]</li>
        </ul>
      </div>
      <div class="detail-section">
        <h3>Diagnosis and Treatment</h3>
        <p>Diagnosis is made by microscopic examination of a skin or nail scraping prepared with potassium hydroxide (KOH), which reveals septate hyphae. [1, 2] Microsporum species can sometimes be identified using a Wood's lamp, as they may fluoresce. [1] Treatment involves topical antifungal creams (e.g., clotrimazole, miconazole) for most skin infections. [1] Widespread infections or those involving hair and nails often require oral therapy with agents like terbinafine, itraconazole, or griseofulvin. [1, 2]</p>
      </div>
    `
  },
  {
    name: "Malassezia furfur",
    classification: "Cutaneous",
    morphology: "Yeast (and Mold)",
    affectedSystems: ["Integumentary (Skin)"],
    transmission: ["Commensal"],
    diagnosis: ["KOH Mount"],
    treatment: ["Topical Selenium Sulfide", "Topical Azoles"],
    prevention: ["Prophylactic shampoo use"],
    detail: `
      <div class="detail-section">
        <h3>Key Features</h3>
        <p>Malassezia furfur is a lipophilic (lipid-loving) yeast that is part of the normal skin flora. [1, 2] Under certain conditions, it can overgrow and cause disease. It is a dimorphic fungus but exists as both yeast and short hyphal forms on the skin. [1]</p>
      </div>
      <div class="detail-section">
        <h3>Pathogenesis</h3>
        <p>The most common disease is <strong>tinea versicolor</strong> (pityriasis versicolor), a superficial skin infection characterized by hypo- or hyperpigmented macules, usually on the trunk. [1, 2] The fungus produces acids that inhibit melanin production, causing the hypopigmented spots. [1] It can also cause seborrheic dermatitis (dandruff). [2] In a rare but serious manifestation, it can cause fungemia in patients receiving intravenous lipid emulsions, particularly neonates. [1, 2]</p>
      </div>
      <div class="detail-section">
        <h3>Diagnosis and Treatment</h3>
        <p>Diagnosis of tinea versicolor is made by KOH preparation of skin scrapings, which shows a characteristic "spaghetti and meatballs" pattern of short hyphae and budding yeast cells. [1, 2, 4] The lesions may also fluoresce a yellow-green color under a Wood's lamp. [1] Treatment is with topical agents like selenium sulfide shampoo or ketoconazole cream. [1, 2]</p>
      </div>
    `
  },
  {
    name: "Sporothrix schenckii",
    classification: "Cutaneous",
    morphology: "Dimorphic",
    affectedSystems: ["Integumentary (Skin)", "Lymphatic System"],
    transmission: ["Traumatic inoculation"],
    diagnosis: ["Culture", "Microscopy (Biopsy)"],
    treatment: ["Itraconazole", "Potassium Iodide"],
    prevention: ["Wear protective gloves during gardening"],
    detail: `
      <div class="detail-section">
        <h3>Key Features</h3>
        <p>This dimorphic fungus is found on vegetation, such as rose thorns, sphagnum moss, and hay. [1, 2] It causes sporotrichosis, often called "rose gardener's disease." [1, 4] It exists as a mold in the environment and as a cigar-shaped yeast in tissue. [1, 2, 4]</p>
      </div>
      <div class="detail-section">
        <h3>Life-Cycle and Transmission</h3>
        <p>Infection occurs through traumatic inoculation of the skin, such as a prick from a rose thorn. [1, 2] The fungus is introduced into the subcutaneous tissue, where it converts to its yeast form. [4]</p>
      </div>
      <div class="detail-section">
        <h3>Pathogenesis</h3>
        <p>The most common form is <strong>lymphocutaneous sporotrichosis</strong>. It begins as a small, painless papule at the site of inoculation. [1, 2] Over weeks, similar nodules appear in a linear pattern along the path of lymphatic drainage from the primary lesion. [1, 2] Disseminated disease can occur in immunocompromised hosts but is rare. [1]</p>
      </div>
      <div class="detail-section">
        <h3>Diagnosis and Treatment</h3>
        <p>Diagnosis is best made by culturing a sample from a skin lesion. [1, 2] Biopsy may show the characteristic cigar-shaped yeasts, sometimes within asteroid bodies (yeast cells surrounded by eosinophilic material). [1, 4] The treatment of choice for lymphocutaneous disease is itraconazole. [1, 2] A classic, though less commonly used, treatment is a saturated solution of potassium iodide. [1]</p>
      </div>
    `
  },

  // =================================================================
  // Opportunistic Fungal Infections
  // =================================================================
  {
    name: "Candida albicans",
    classification: "Opportunistic",
    morphology: "Yeast (Pseudohyphae and Germ Tubes)",
    affectedSystems: ["Mucocutaneous", "Genitourinary", "Cardiovascular", "Multisystem"],
    transmission: ["Commensal"],
    diagnosis: ["KOH Mount", "Culture", "Blood Culture"],
    treatment: ["Fluconazole", "Nystatin", "Echinocandins", "Amphotericin B"],
    prevention: ["Prophylaxis in high-risk patients"],
    detail: `
      <div class="detail-section">
        <h3>Key Features</h3>
        <p>Candida albicans is the most common cause of opportunistic fungal infections. It is part of the normal flora of the skin, mouth, GI tract, and vagina. [1, 2] It is a polymorphic yeast, capable of growing as budding yeast, pseudohyphae, and true hyphae (germ tubes), which is associated with tissue invasion. [1, 4]</p>
      </div>
      <div class="detail-section">
        <h3>Pathogenesis</h3>
        <p>Disease occurs when there is a disruption of host defenses, such as from antibiotic use, immunosuppression (e.g., AIDS, chemotherapy), or indwelling catheters. [1, 2] Common manifestations include:</p>
        <ul>
          <li><strong>Oral thrush:</strong> White, curd-like plaques on the tongue and oral mucosa that can be scraped off. [1]</li>
          <li><strong>Esophagitis:</strong> A common AIDS-defining illness. [1]</li>
          <li><strong>Vulvovaginitis:</strong> "Yeast infection," common after antibiotic use or in pregnancy. [1]</li>
          <li><strong>Diaper rash:</strong> Cutaneous candidiasis in moist skin folds. [1]</li>
          <li><strong>Candidemia:</strong> Invasive bloodstream infection, often associated with central lines, which can lead to endocarditis or abscesses in various organs. [1, 2]</li>
        </ul>
      </div>
      <div class="detail-section">
        <h3>Diagnosis and Treatment</h3>
        <p>Diagnosis of mucocutaneous disease is made by KOH mount showing yeast and pseudohyphae. [1] Invasive disease is diagnosed by blood culture. [2] Treatment varies by site and severity. Topical nystatin or azoles are used for thrush and vaginitis. [1] Oral fluconazole is used for esophagitis. [1] Invasive disease is treated with IV echinocandins (e.g., caspofungin) or amphotericin B. [1, 2]</p>
      </div>
    `
  },
  {
    name: "Aspergillus fumigatus",
    classification: "Opportunistic",
    morphology: "Mold",
    affectedSystems: ["Respiratory", "Multisystem"],
    transmission: ["Inhalation of spores"],
    diagnosis: ["Microscopy", "Culture", "Galactomannan Assay"],
    treatment: ["Voriconazole", "Amphotericin B"],
    prevention: ["HEPA filters for high-risk patients"],
    detail: `
      <div class="detail-section">
        <h3>Key Features</h3>
        <p>Aspergillus is a ubiquitous mold found in soil, decaying vegetation, and air. [1, 2] Infection is acquired by inhaling spores. [1] Microscopically, it is characterized by septate hyphae that branch at acute (45-degree) angles. [1, 2, 4]</p>
      </div>
      <div class="detail-section">
        <h3>Pathogenesis</h3>
        <p>Aspergillus causes a spectrum of diseases depending on the host's immune status:</p>
        <ul>
          <li><strong>Allergic Bronchopulmonary Aspergillosis (ABPA):</strong> A hypersensitivity reaction in patients with asthma or cystic fibrosis, causing wheezing and migratory pulmonary infiltrates. [1, 2]</li>
          <li><strong>Aspergilloma ("Fungus Ball"):</strong> Colonization of a pre-existing lung cavity (e.g., from TB) with a mass of hyphae. Patients may cough up blood (hemoptysis). [1, 2]</li>
          <li><strong>Invasive Aspergillosis:</strong> A life-threatening infection in severely immunocompromised patients (especially neutropenic patients). The fungus invades blood vessels, causing thrombosis and infarction, and disseminates to other organs like the brain. [1, 2]</li>
        </ul>
      </div>
      <div class="detail-section">
        <h3>Diagnosis and Treatment</h3>
        <p>Diagnosis can be made by microscopy of tissue samples showing the characteristic hyphae. [2] Culture can confirm the species. [2] Detection of galactomannan (a component of the fungal cell wall) in serum or bronchoalveolar lavage fluid is a key non-invasive diagnostic marker. [1, 2] The treatment of choice for invasive aspergillosis is voriconazole. [1, 2] Amphotericin B is an alternative. [1]</p>
      </div>
    `
  },
  {
    name: "Cryptococcus neoformans",
    classification: "Opportunistic",
    morphology: "Yeast (Encapsulated)",
    affectedSystems: ["Nervous System", "Respiratory"],
    transmission: ["Inhalation of spores"],
    diagnosis: ["India Ink Stain", "Cryptococcal Antigen Test", "Culture"],
    treatment: ["Amphotericin B + Flucytosine", "Fluconazole"],
    prevention: ["Fluconazole prophylaxis in AIDS patients"],
    detail: `
      <div class="detail-section">
        <h3>Key Features</h3>
        <p>Cryptococcus neoformans is a heavily encapsulated yeast found worldwide in soil and pigeon droppings. [1, 2, 4] The thick polysaccharide capsule is its major virulence factor, as it inhibits phagocytosis. [1, 2, 4]</p>
      </div>
      <div class="detail-section">
        <h3>Life-Cycle and Transmission</h3>
        <p>Infection is acquired by inhaling yeast cells from the environment. [1, 2] The primary infection occurs in the lungs, which is often asymptomatic. [1] In immunocompromised hosts, particularly those with AIDS or other defects in T-cell immunity, the yeast can disseminate hematogenously. [1, 2]</p>
      </div>
      <div class="detail-section">
        <h3>Pathogenesis</h3>
        <p>The most common and severe manifestation is <strong>cryptococcal meningitis</strong>, the leading cause of fungal meningitis. [1, 2] It typically presents with subacute onset of headache, fever, and altered mental status. The infection can also cause pneumonia or skin lesions. [1]</p>
      </div>
      <div class="detail-section">
        <h3>Diagnosis and Treatment</h3>
        <p>Diagnosis of meningitis is made by lumbar puncture. A classic (but not very sensitive) test is the India ink stain of cerebrospinal fluid (CSF), which reveals the encapsulated yeast as budding cells with a clear halo. [1, 2, 4] The most sensitive and specific diagnostic test is the detection of cryptococcal antigen (CrAg) in CSF or serum via latex agglutination or immunoassay. [1, 2] Treatment for meningitis involves an induction phase with amphotericin B and flucytosine, followed by a long consolidation and maintenance phase with fluconazole. [1, 2]</p>
      </div>
    `
  },
  {
    name: "Mucor & Rhizopus spp.",
    classification: "Opportunistic",
    morphology: "Mold",
    affectedSystems: ["Nasal/Sinus", "Nervous System", "Respiratory"],
    transmission: ["Inhalation of spores"],
    diagnosis: ["Microscopy (Biopsy)"],
    treatment: ["Surgical Debridement", "Amphotericin B"],
    prevention: ["Control underlying conditions (e.g., diabetes)"],
    detail: `
      <div class="detail-section">
        <h3>Key Features</h3>
        <p>These fungi are members of the order Mucorales and cause mucormycosis, a highly aggressive and often fatal infection. [1, 2] They are ubiquitous molds found in the environment. [1] Microscopically, they are characterized by broad, non-septate (or sparsely septate) hyphae that branch at wide, often 90-degree, angles. [1, 2, 4]</p>
      </div>
      <div class="detail-section">
        <h3>Pathogenesis</h3>
        <p>Mucormycosis almost exclusively affects immunocompromised individuals, with the most classic risk factor being <strong>diabetic ketoacidosis (DKA)</strong>. [1, 2] Other risk factors include neutropenia and treatment with deferoxamine. [1] The most common clinical form is <strong>rhinocerebral mucormycosis</strong>, where the infection begins in the nasal sinuses and rapidly invades adjacent tissues, including the palate and orbit, and can spread to the brain. [1, 2] A key feature is the fungus's propensity to invade blood vessels, causing thrombosis, tissue necrosis, and the formation of a characteristic black eschar on the nasal turbinates or palate. [1, 2]</p>
      </div>
      <div class="detail-section">
        <h3>Diagnosis and Treatment</h3>
        <p>Diagnosis requires a high index of suspicion and is confirmed by biopsy of the affected tissue, which shows the characteristic broad, non-septate hyphae. [1, 2] Culture can be done but may be negative. [2] Treatment is a medical emergency and requires a two-pronged approach: aggressive surgical debridement of all necrotic tissue and high-dose intravenous amphotericin B. [1, 2] Control of the underlying immunosuppressive state (e.g., correcting DKA) is also critical. [1]</p>
      </div>
    `
  },
  {
    name: "Pneumocystis jirovecii",
    classification: "Opportunistic",
    morphology: "Atypical Fungus (Yeast-like)",
    affectedSystems: ["Respiratory"],
    transmission: ["Airborne"],
    diagnosis: ["Microscopy (Stain of BAL fluid)"],
    treatment: ["Trimethoprim-Sulfamethoxazole (TMP-SMX)"],
    prevention: ["TMP-SMX Prophylaxis"],
    detail: `
      <div class="detail-section">
        <h3>Key Features</h3>
        <p>Pneumocystis jirovecii (formerly P. carinii) is an atypical fungus that was once classified as a protozoan. [1, 2] It is a major cause of opportunistic infection in immunocompromised individuals, particularly those with advanced AIDS (CD4 count < 200 cells/mm³). [1, 2, 4]</p>
      </div>
      <div class="detail-section">
        <h3>Pathogenesis</h3>
        <p>The organism causes Pneumocystis pneumonia (PCP). [1, 2] Inhaled organisms attach to type I pneumocytes in the alveoli, leading to inflammation and damage. [4] This results in a diffuse interstitial pneumonia, impairing gas exchange. Patients typically present with a non-productive cough, progressive dyspnea, and fever. [1] A chest X-ray classically shows diffuse, bilateral "ground-glass" opacities. [1, 2]</p>
      </div>
      <div class="detail-section">
        <h3>Diagnosis and Treatment</h3>
        <p>P. jirovecii cannot be cultured. [1, 2] Diagnosis is made by identifying the organism in a respiratory specimen, typically from bronchoalveolar lavage (BAL) fluid or induced sputum. [1, 2] A methenamine silver stain is classically used to visualize the cyst form, which appears as crushed "ping-pong balls." [1, 4] The treatment of choice is high-dose trimethoprim-sulfamethoxazole (TMP-SMX). [1, 2] Corticosteroids are added for severe cases to reduce inflammation. [1]</p>
      </div>
      <div class="detail-section">
        <h3>Prevention</h3>
        <p>Prophylaxis with TMP-SMX is highly effective and recommended for patients at high risk, such as those with a CD4 count below 200. [1, 2]</p>
      </div>
    `
  }
];
