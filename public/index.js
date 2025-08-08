// Personality Test Questions (Bahasa Malaysia) - Ya/Tidak Format
const questions = [
    // Penyimpan (Saver) - Questions 1-4
    {
        id: 1,
        text: "Adakah kamu simpan sebahagian duit belanja setiap minggu?",
        type: "Saver"
    },
    {
        id: 2,
        text: "Adakah kamu fikir dulu sebelum beli sesuatu yang mahal?",
        type: "Saver"
    },
    {
        id: 3,
        text: "Adakah kamu rasa seronok bila tengok duit dalam tabung bertambah?",
        type: "Saver"
    },
    {
        id: 4,
        text: "Adakah kamu risau kalau duit kamu habis?",
        type: "Saver"
    },

    // Pemboros (Spender) - Questions 5-8
    {
        id: 5,
        text: "Adakah kamu terus beli bila nampak benda yang kamu suka?",
        type: "Spender"
    },
    {
        id: 6,
        text: "Adakah kamu suka pergi shopping?",
        type: "Spender"
    },
    {
        id: 7,
        text: "Adakah kamu seronok bila dapat beli barang baru?",
        type: "Spender"
    },
    {
        id: 8,
        text: "Adakah kamu suka beli barang tanpa merancang bajet?",
        type: "Spender"
    },

    // Pemurah (Giver) - Questions 9-12
    {
        id: 9,
        text: "Adakah kamu suka bagi hadiah pada orang lain?",
        type: "Giver"
    },
    {
        id: 10,
        text: "Adakah kamu suka tolong kawan yang tak ada duit?",
        type: "Giver"
    },
    {
        id: 11,
        text: "Adakah kamu rasa gembira bila buat orang lain gembira dengan hadiah kamu?",
        type: "Giver"
    },
    {
        id: 12,
        text: "Adakah kamu suka berkongsi duit dengan family?",
        type: "Giver"
    },

    // Pengelak Duit (Money Avoider) - Questions 13-16
    {
        id: 13,
        text: "Adakah kamu tak suka fikir pasal duit?",
        type: "Money Avoider"
    },
    {
        id: 14,
        text: "Adakah kamu malas nak kira duit atau buat bajet?",
        type: "Money Avoider"
    },
    {
        id: 15,
        text: "Adakah kamu rasa duit tak penting sangat?",
        type: "Money Avoider"
    },
    {
        id: 16,
        text: "Adakah kamu tak tahu macam mana nak guna duit dengan bijak?",
        type: "Money Avoider"
    },

    // Pengejar Status (Status Seeker) - Questions 17-20
    {
        id: 17,
        text: "Adakah kamu nak orang nampak kamu hebat dengan barang yang kamu ada?",
        type: "Status Seeker"
    },
    {
        id: 18,
        text: "Adakah kamu suka kalau barang kamu nampak mahal?",
        type: "Status Seeker"
    },
    {
        id: 19,
        text: "Adakah kamu suka beli barang yang nampak eksklusif?",
        type: "Status Seeker"
    },
    {
        id: 20,
        text: "Adakah kamu rasa penting untuk nampak kaya?",
        type: "Status Seeker"
    }
];

// Global variables
let currentQuestionIndex = 0;
let answers = [];
let scores = {
    "Saver": 0,
    "Spender": 0,
    "Giver": 0,
    "Money Avoider": 0,
    "Status Seeker": 0,
};

// Personality types and their descriptions
const personalityTypes = {
    "Saver": {
        title: "SOFI SIMPAN",
        characterName: "Sofi Saver",
        color: "#4A90E2",
        points: [
            "Tak mudah terpengaruh",
            "Bijak merancang", 
            "Berjimat-cermat"
        ],
        description: "Sofi suka simpan duit. Setiap kali dia dapat duit raya atau upah, dia akan masukkan ke dalam tabung warna merah jambu miliknya. Sofi akan rasa sangat seronok bila tengok duit dalam tabungnya makin banyak.\n\nKalau dia nampak barang yang dia suka, dia akan fikir dulu. \"Betul ke aku perlukan ni? Atau lebih baik simpan dulu?\" Itulah cara Sofi kawal dirinya supaya tidak belanja sesuka hati. Sofi juga bijak merancang. Dia ada senarai barang yang dia nak beli, tapi dia tahu tak semua perlu dibeli sekarang. Dia juga tak mudah terikut-ikut dengan kawan-kawan yang suka shopping.\n\nIbu dan ayah bangga dengan Sofi kerana dia tahu cara jaga duit sejak kecil. Tapi ibu juga ajar dia bahawa menyimpan itu penting, dan belanja sedikit untuk diri sendiri juga tak salah."
    },
    "Spender": {
        title: "ZARA ZOOM SHOPPING",
        characterName: "Zara Spender",
        color: "#E74C3C",
        points: [
            "Spontan",
            "Kurang merancang",
            "Suka berbelanja"
        ],
        description: "Zara memang suka shopping. Bila nampak barang yang cantik atau trending, dia terus rasa nak beli. \"Wah, comelnya! Zara nak sangat ni,\" katanya sambil tersenyum lebar. Dia suka pakaian bergaya dan makanan yang tengah viral.\n\nZara selalu teruja bila ada jualan murah atau promosi menarik. Kadang-kadang, dia beli barang tanpa fikir panjang sama ada dia perlukan atau tidak. Bagi Zara, rasa seronok waktu membeli itu yang paling penting.\n\nTapi, bila duit dah habis dan barang yang dibeli tak digunakan, barulah Zara rasa menyesal. Jadi, mama Zara mula ajar dia cara buat bajet supaya dia boleh kawal belanja.\n\nSekarang, Zara masih suka shopping, tapi dia cuba fikir dulu sebelum beli dan mula belajar simpan sedikit demi sedikit."
    },
    "Giver": {
        title: "MUBIN MURAH HATI",
        characterName: "Mubin Giver",
        icon: "❤️",
        color: "#27AE60",
        points: [
            "Pemurah",
            "Prihatin",
            "Suka berkongsi"
        ],
        description: "Mubin sangat suka berkongsi. Bila dia dapat duit raya, dia akan berfikir, \"Siapa aku boleh belanja kali ni?\" Kadang-kadang dia belikan makanan untuk kawan, atau hadiah untuk adik. Dia rasa sangat gembira bila tengok orang lain happy.\n\nBagi Mubin, duit bukan untuk disimpan lama-lama. Dia percaya rezeki akan datang balik bila kita berkongsi. Dia juga suka derma bila nampak tabung di masjid atau di sekolah. Mubin tunjuk kasih sayang melalui pemberian.\n\nTapi kadang-kadang, Mubin terlalu seronok memberi sampai duitnya cepat habis. Ibu dan ayah ajar Mubin supaya belajar seimbangkan antara memberi dan menyimpan.\n\nSekarang, Mubin masih seorang yang pemurah, tapi dia juga pandai merancang. Dia simpan sebahagian duitnya dan guna sebahagian lagi untuk berkongsi."
    },
    "Money Avoider": {
        title: "DANIAL DON'T CARE",
        characterName: "Danial Don't Care",
        icon: "😴",
        color: "#F39C12",
        points: [
            "Kurang minat urus duit",
            "Santai",
            "Kurang minat urus duit"
        ],
        description: "DANIAL memang jenis yang tak kisah sangat pasal duit. Bila orang bagi duit, dia letak saja merata-rata. Kadang-kadang bawah bantal, dalam poket seluar, atau entah ke mana. Dia tak ingat pun duit tu masih ada atau dah hilang.\n\nBagi DANIAL, yang penting dia happy. Dia lebih suka tengok kartun, main dengan kawan atau makan makanan sedap daripada fikir pasal menabung atau shopping. Kalau nak beli sesuatu, DANIAL biasanya akan tanya, 'Ayah ada duit tak?' sebab dia tak tahu berapa duit yang dia ada sendiri.\n\nTapi satu hari, dia tengok kawan dia beli permainan guna duit simpanan sendiri. DANIAL pun rasa nak cuba. Ibu mula ajar dia simpan sedikit demi sedikit dan kira duit dengan betul. Sekarang, DANIAL masih santai macam biasa, tapi dia dah mula pandai urus duit supaya tak perlu minta tolong orang lain setiap kali nak beli sesuatu."
    },
    "Status Seeker": {
        title: "FASHA FASHIONISTA",
        characterName: "FASHA FASHIONISTA",
        icon: "👑",
        color: "#9B59B6",
        points: [
            "Pentingkan pandangan orang lain",
            "Ikut trend",
            "Suka bergaya"
        ],
        description: "Fasha sangat suka bergaya. Setiap kali keluar rumah, dia akan pilih pakaian paling cantik dalam almari dia. Dia suka warna yang menarik, aksesori yang comel, dan barang-barang yang nampak mahal.\n\nBagi Fasha, beli barang yang cantik buat dia rasa yakin dan gembira. Bila orang puji penampilan dia, dia rasa bangga. Kadang-kadang, Fasha lebih suka shopping untuk nampak cantik daripada menabung untuk benda lain.\n\nTapi lama-lama, Fasha mula perasan duitnya cepat habis. Mama pun ajar Fasha tentang beza antara kehendak dan keperluan. Sekarang, Fasha masih suka bergaya, tapi dia mula berfikir dulu sebelum beli. Kalau betul-betul perlukan sesuatu barang dan ada bajet, barulah dia beli."
    }
};

// Function to get the correct SVG filename for each personality type
function getPersonalityImage(personalityType) {
    const imageMap = {
        "Saver": "SOFI SIMPAN.svg",
        "Spender": "ZARA.svg", 
        "Giver": "MUBIN.svg",
        "Money Avoider": "Danial.svg",
        "Status Seeker": "FARAH.svg"
    };
    return imageMap[personalityType] || "default.svg";
}

// Application state
// let currentQuestionIndex = 0;
// let answers = [];
// let scores = {
//     "Saver": 0,
//     "Spender": 0,
//     "Giver": 0,
//     "Money Avoider": 0,
//     "Status Seeker": 0
// };

// Initialize the app
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Personality Test JavaScript Loaded!');
    
    // Get DOM elements
    const startBtn = document.getElementById('start-btn');
    const prevBtn = document.getElementById('prev-btn');
    const retakeBtn = document.getElementById('retake-btn');
    
    console.log('Start button found:', !!startBtn);
    
    if (startBtn) {
        startBtn.addEventListener('click', startTest);
        console.log('✅ Start button event listener added');
    } else {
        console.error('❌ Start button not found!');
    }
    
    if (prevBtn) prevBtn.addEventListener('click', previousQuestion);
    
    // Add event listener for retake button
    if (retakeBtn) {
        console.log('🔄 Found retake button, adding event listener...');
        retakeBtn.addEventListener('click', function(e) {
            console.log('🔄 Retake button clicked!');
            e.preventDefault();
            e.stopPropagation();
            resetTest();
            showWelcomeScreen();
            console.log('✅ Test reset and welcome screen shown');
        });
        console.log('✅ Retake button event listener added');
    } else {
        console.error('❌ Retake button not found!');
    }
});


// Start the test
function startTest() {
    console.log('🎯 Starting test...');
    
    // Get DOM elements
    const welcomeScreen = document.getElementById('welcome-screen');
    const testScreen = document.getElementById('test-screen');
    
    if (welcomeScreen && testScreen) {
        welcomeScreen.classList.remove('active');
        testScreen.classList.add('active');
        currentQuestionIndex = 0;
        answers = [];
        resetScores();
        showQuestion();
        updateNavigationButtons();
        console.log('✅ Test started successfully');
    } else {
        console.error('❌ Welcome screen or test screen not found!');
    }
}

// Reset scores
function resetScores() {
    scores = {
        "Saver": 0,
        "Spender": 0,
        "Giver": 0,
        "Money Avoider": 0,
        "Status Seeker": 0,
    };
}

// Show current question with smooth transitions
function showQuestion() {
    const question = questions[currentQuestionIndex];
    console.log('📝 Showing question:', currentQuestionIndex + 1, question.text);

    // Get DOM elements
    const questionText = document.getElementById('question-text');
    const optionsContainer = document.getElementById('options-container');
    const progressFill = document.getElementById('progress-fill');
    const progressPercentage = document.getElementById('progress-percentage');
    const progressText = document.getElementById('progress-text');
    const questionCounter = document.getElementById('question-counter');
    const questionSection = document.querySelector('.question-section');

    // Fade out current content
    if (questionSection) {
        questionSection.style.opacity = '0';
        questionSection.style.transform = 'translateY(20px)';
    }

    setTimeout(() => {
        // Update question text
        if (questionText) {
            questionText.textContent = question.text;
        }

        // Update progress with smooth animation
        const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
        if (progressFill) progressFill.style.width = progress + '%';
        if (progressPercentage) progressPercentage.textContent = Math.round(progress) + '%';
        if (progressText) {
            progressText.innerHTML = `Soalan ${currentQuestionIndex + 1}/${questions.length}`;
        }
        if (questionCounter) questionCounter.textContent = currentQuestionIndex + 1;

        // Create Ya/Tidak options with staggered animation
        if (optionsContainer) {
            optionsContainer.innerHTML = '';

            // Create Ya (Yes) option
            const yaOption = createOption("✅ Ya", 1, 0);
            optionsContainer.appendChild(yaOption);

            // Create Tidak (No) option
            const tidakOption = createOption("❌ Tidak", 0, 1);
            optionsContainer.appendChild(tidakOption);

            // Restore previous answer if exists
            if (answers[currentQuestionIndex]) {
                const previousAnswer = answers[currentQuestionIndex];
                const selectedOption = optionsContainer.querySelector(`[data-value="${previousAnswer.value}"]`);
                if (selectedOption) {
                    selectedOption.classList.add('selected');
                }
            }
        }

        // Fade in new content
        if (questionSection) {
            questionSection.style.opacity = '1';
            questionSection.style.transform = 'translateY(0)';
        }

        updateNavigationButtons();
    }, 200);
}

// Create option element
function createOption(text, value, index) {
    const option = document.createElement('button');
    option.className = 'option';
    option.textContent = text;
    option.dataset.value = value;
    option.style.animationDelay = `${index * 0.1}s`;
    
    option.addEventListener('click', function() {
        selectOption(this, value);
    });
    
    return option;
}

// Select an option
function selectOption(optionElement, value) {
    console.log('✅ Option selected:', optionElement.textContent, 'Value:', value);

    // Remove previous selections with fade effect
    document.querySelectorAll('.option').forEach(opt => {
        opt.classList.remove('selected');
        if (opt !== optionElement) {
            opt.style.opacity = '0.6';
            opt.style.transform = 'scale(0.95)';
        }
    });

    // Select current option with animation
    optionElement.classList.add('selected');
    optionElement.style.opacity = '1';
    optionElement.style.transform = 'scale(1.02)';

    // Add a subtle pulse effect
    setTimeout(() => {
        optionElement.style.transform = 'scale(1)';
    }, 150);

    // Store answer
    const question = questions[currentQuestionIndex];
    answers[currentQuestionIndex] = {
        questionId: question.id,
        answer: optionElement.textContent,
        value: value,
        type: question.type
    };

    // Update scores
    updateScores();
    updateNavigationButtons();

    // Add a small delay for visual feedback
    setTimeout(() => {
        // Auto advance to next question or show results if last question
        if (currentQuestionIndex < questions.length - 1) {
            nextQuestion();
        } else {
            // This is the last question, show results
            showResults();
        }
    }, 800);
}

// Update scores based on current answers (Ya = 1 point, Tidak = 0 points)
function updateScores() {
    resetScores();

    answers.forEach((answer, index) => {
        if (answer && answer.value !== undefined) {
            const question = questions[index];
            scores[question.type] += answer.value; // 1 for Ya, 0 for Tidak
        }
    });

    console.log('📊 Current scores:', scores);
}

// Manual navigation functions removed - using auto-advance only

// Go back to welcome screen
function goToWelcome() {
    testScreen.classList.remove('active');
    welcomeScreen.classList.add('active');
    resetTest();
}

// Navigation buttons functionality removed

// Reset test
function resetTest() {
    currentQuestionIndex = 0;
    answers = [];
    resetScores();
}

// Show welcome screen
function showWelcomeScreen() {
    const resultsScreen = document.getElementById('results-screen');
    const testScreen = document.getElementById('test-screen');
    const welcomeScreen = document.getElementById('welcome-screen');
    
    if (resultsScreen) resultsScreen.classList.remove('active');
    if (testScreen) testScreen.classList.remove('active');
    if (welcomeScreen) welcomeScreen.classList.add('active');
}

// Helper functions for kids-friendly design
function getPersonalityEmoji(personality) {
    const emojiMap = {
        'danial': '😴',
        'farah': '👗',
        'mubin': '🤗',
        'zara': '🛍️',
        'sofi': '💰'
    };
    return emojiMap[personality] || '🎭';
}

function getPersonalityBadge(personality) {
    const badgeMap = {
        'danial': 'PENGELAK DUIT',
        'farah': 'PENGEJAR STATUS',
        'mubin': 'PEMURAH',
        'zara': 'PEMBOROS',
        'sofi': 'PENJIMAT'
    };
    return badgeMap[personality] || 'UNKNOWN';
}

function getPersonalityBadgeEn(personality) {
    const badgeMap = {
        'danial': 'MONEY AVOIDER',
        'farah': 'STATUS SEEKER',
        'mubin': 'GIVER',
        'zara': 'SPENDER',
        'sofi': 'SAVER'
    };
    return badgeMap[personality] || 'UNKNOWN';
}

// Returns combined Malay/English secondary label for a given personality type key
function getSecondaryLabelForType(type) {
    const typeToBadges = {
        'Saver': '(PENJIMAT) (SAVER)',
        'Spender': '(PEMBOROS) (SPENDER)',
        'Giver': '(PEMURAH) (GIVER)',
        'Money Avoider': '(PENGELAK DUIT)\n(MONEY AVOIDER)',
        'Status Seeker': '(PENGEJAR STATUS)\n(STATUS SEEKER)'
    };
    return typeToBadges[type] || '';
}

// Show results
function showResults() {
    console.log('🎉 Showing results...');
    
    // Get DOM elements
    const testScreen = document.getElementById('test-screen');
    const resultsScreen = document.getElementById('results-screen');
    const highestPersonalities = document.getElementById('highest-personalities');
    
    console.log('Test screen found:', !!testScreen);
    console.log('Results screen found:', !!resultsScreen);
    console.log('Highest personalities element found:', !!highestPersonalities);
    
    if (testScreen) testScreen.classList.remove('active');
    if (resultsScreen) resultsScreen.classList.add('active');

    // Scroll to top of the results screen with a small delay to ensure transition completes
    setTimeout(() => {
        if (resultsScreen) {
            resultsScreen.scrollTop = 0;
            // Also scroll the window to top for better user experience
            window.scrollTo({ top: 0, behavior: 'smooth' });
            console.log('📜 Scrolled to top of results screen');
        }
    }, 100);

    // Calculate total questions answered
    const totalQuestions = questions.length;

    // Calculate highest scoring personality type(s)
    const maxScore = Math.max(...Object.values(scores));
    const topPersonalities = Object.keys(scores).filter(type => scores[type] === maxScore);

    // Calculate percentages for all personality types
    const personalityPercentages = {};
    Object.keys(scores).forEach(type => {
        personalityPercentages[type] = Math.round((scores[type] / totalQuestions) * 100);
    });

    console.log('🏆 Top personalities:', topPersonalities, 'Max Score:', maxScore);
    console.log('📊 Percentages:', personalityPercentages);

    // Display main personality/personalities with new design
    if (highestPersonalities) {
        console.log('🎯 Setting innerHTML for highest personalities');
        
        // Kids-friendly personality result design - Each personality in its own container
        let mainResultHTML = '';
        
        topPersonalities.forEach((personality, index) => {
            console.log('Processing personality:', personality);
            const personalityData = personalityTypes[personality];
            console.log('Personality data found:', !!personalityData);
            const percentage = personalityPercentages[personality];
            
            if (personalityData) {
                mainResultHTML += `
                    <div class="personality-result-container">
                        <div class="personality-card-kids" style="--personality-color: ${personalityData.color};">
                            <div class="card-header-kids">
                                <div class="card-icon-kids">
                                    <div class="personality-icon-container ${getPersonalityImage(personality).includes('FARAH.svg') ? 'fanisha-container' : ''}" style="
                                        width: 120px; 
                                        height: 120px; 
                                        border-radius: 50%; 
                                        background: ${personalityData.color}; 
                                        display: flex; 
                                        align-items: center; 
                                        justify-content: center; 
                                        margin: 0 auto;
                                        aspect-ratio: 1;
                                        min-width: 120px;
                                        min-height: 120px;
                                        max-width: 120px;
                                        max-height: 120px;">
                                        <img src="assets/images/${getPersonalityImage(personality)}" 
                                             alt="${personalityData.characterName}" 
                                             style="width: 100px; height: 100px; object-fit: contain;">
                                    </div>
                                </div>
                                <div class="card-title-kids">
                                    <h3 style="color: var(--personality-color, #2d3748);">${personalityData.title}</h3>
                                     <div class="card-subtitle-kids" style="margin-top: 4px; font-size: 14px; color: #4a5568; font-weight: 600;">${getSecondaryLabelForType(personality)}</div>
                                </div>
                                ${personalityData.points ? `
                                <div class="personality-points">
                                    ${personalityData.points.map(point => `
                                        <div class="point-item">
                                            <span class="point-icon">✓</span>
                                            <span class="point-text">${point}</span>
                                        </div>
                                    `).join('')}
                                </div>
                                ` : ''}
                            </div>
                            <div class="card-body-kids">
                                <div class="description-section">
                                    <div class="personality-description">${personalityData.description.replace(/\n\n/g, '</p><p>').replace(/^/, '<p>').replace(/$/, '</p>')}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
            } else {
                mainResultHTML += `
                    <div class="personality-result-container">
                        <div class="personality-card-kids error">
                            <div class="card-header-kids">
                                <div class="card-icon-kids">
                                    <span class="personality-emoji">❌</span>
                                </div>
                                <div class="card-title-kids">
                                    <h3>Error: ${personality}</h3>
                                </div>
                            </div>
                            <div class="card-body-kids">
                                <p>Personality data not found!</p>
                            </div>
                        </div>
                    </div>
                `;
            }
        });
        highestPersonalities.innerHTML = mainResultHTML;
        console.log('✅ InnerHTML set successfully');
    } else {
        console.error('❌ highest-personalities element not found!');
    }

    // Handle other personalities with new design
    const otherPersonalities = document.getElementById('other-personalities');
    const otherResultsSection = document.querySelector('.other-results');

    if (otherPersonalities && otherResultsSection) {
        // Get ALL personality types except the ones already shown in main results
        const allPersonalityTypes = Object.keys(personalityTypes);
        const otherTypes = allPersonalityTypes.filter(type => !topPersonalities.includes(type));

        // Always show the "Jenis Personaliti Lain" section if there are other types to show
        if (otherTypes.length > 0) {
            otherResultsSection.style.display = 'block';

            let otherHTML = '';
            otherTypes
                .sort((a, b) => scores[b] - scores[a]) // Sort by score descending
                .forEach((type, index) => {
                    const personalityData = personalityTypes[type];
                    const percentage = personalityPercentages[type] || 0;

                    // Show all personality types, even if they have 0% score
                    otherHTML += `
                        <div class="personality-result-container">
                            <div class="other-personality-item" style="--personality-color: ${personalityData.color};">
                                <div class="other-personality-header">
                                    <div class="other-personality-icon-name">
                                        <div class="other-personality-icon">
                                            <div class="personality-icon-container" style="
                                                width: 120px; 
                                                height: 120px; 
                                                border-radius: 50%; 
                                                background: ${personalityData.color}; 
                                                display: flex; 
                                                align-items: center; 
                                                justify-content: center; 
                                                margin: 0 auto;
                                                aspect-ratio: 1;
                                                min-width: 120px;
                                                min-height: 120px;
                                                max-width: 120px;
                                                max-height: 120px;">
                                                <img src="assets/images/${getPersonalityImage(type)}" 
                                                     alt="${personalityData.characterName}" 
                                                     style="width: 100px; height: 100px; object-fit: contain;">
                                            </div>
                                        </div>
                                        <div class="other-personality-info">
                                            <h3 class="other-personality-title">${personalityData.title}</h3>
                                             <div class="other-personality-subtitle">${getSecondaryLabelForType(type)}</div>
                                        </div>
                                    </div>
                                    <div class="other-personality-percentage">
                                        <span class="percentage-value">${percentage}%</span>
                                    </div>
                                </div>
                                ${personalityData.points ? `
                                <div class="personality-points">
                                    ${personalityData.points.map(point => `
                                        <div class="point-item-container" style="
                                            width: 100%;
                                            margin: 8px 0;
                                            padding: 12px 16px;
                                            background: rgba(255, 255, 255, 0.9);
                                            border-radius: 12px;
                                            border: 2px solid var(--personality-color, #2d3748);
                                            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                                            display: flex;
                                            align-items: center;
                                            gap: 12px;
                                            transition: all 0.3s ease;
                                        ">
                                            <span class="point-icon" style="
                                                color: white !important;
                                                font-size: 18px;
                                                font-weight: bold;
                                                min-width: 24px;
                                            ">✓</span>
                                            <span class="point-text" style="
                                                color: #2d3748 !important;
                                                font-size: 16px;
                                                font-weight: 500;
                                                line-height: 1.4;
                                                flex: 1;
                                            ">${point}</span>
                                        </div>
                                    `).join('')}
                                </div>
                                ` : ''}
                                <div class="other-personality-content">
                                    <div class="other-personality-description">${personalityData.description.replace(/\n\n/g, '</p><p>').replace(/^/, '<p>').replace(/$/, '</p>')}</div>
                                </div>
                            </div>
                        </div>
                    `;
                });

            otherPersonalities.innerHTML = otherHTML;
        } else {
            // Hide "Jenis Personaliti Lain" section if all personality types are already shown in main results
            otherResultsSection.style.display = 'none';
        }
    }
    
    // 添加动画效果
    setTimeout(() => {
        // 为主个性卡片添加弹跳动画
        const personalityCards = document.querySelectorAll('.personality-card-kids');
        personalityCards.forEach((card, index) => {
            setTimeout(() => {
                card.style.animation = 'bounceIn 0.8s ease-out';
            }, index * 300);
        });
        
        // 为要点添加滑动动画
        const pointItems = document.querySelectorAll('.point-item');
        pointItems.forEach((point, index) => {
            setTimeout(() => {
                point.style.animation = 'slideInLeft 0.6s ease-out';
            }, index * 200);
        });
        
        // 为其他结果添加淡入动画
        const otherResults = document.querySelectorAll('.other-personality-item');
        otherResults.forEach((result, index) => {
            setTimeout(() => {
                result.style.animation = 'fadeInUp 0.6s ease-out';
            }, (index + pointItems.length) * 200);
        });
        
        // 为图标添加旋转动画
        const personalityIcons = document.querySelectorAll('.personality-icon-container');
        personalityIcons.forEach((icon, index) => {
            setTimeout(() => {
                icon.style.animation = 'rotateIn 1s ease-out';
            }, index * 400);
        });
        
        // 添加浮动庆祝元素
        addFloatingCelebration();
    }, 100);
}

// 添加浮动庆祝效果
function addFloatingCelebration() {
    const celebrationEmojis = ['🎉', '✨', '🎊', '🌟', '💫', '🎈', '🎯', '🏆'];
    const resultsScreen = document.getElementById('results-screen');
    
    if (!resultsScreen) return;
    
    // 创建浮动元素
    for (let i = 0; i < 8; i++) {
        const emoji = document.createElement('div');
        emoji.textContent = celebrationEmojis[i];
        emoji.style.cssText = `
            position: fixed;
            font-size: 24px;
            pointer-events: none;
            z-index: 1000;
            animation: floatCelebration 3s ease-in-out infinite;
            animation-delay: ${i * 0.3}s;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
        `;
        
        resultsScreen.appendChild(emoji);
        
        // 3秒后移除元素
        setTimeout(() => {
            if (emoji.parentNode) {
                emoji.parentNode.removeChild(emoji);
            }
        }, 3000);
    }
}

// Add this function to enable moving to the next question or showing results
function nextQuestion() {
    if (currentQuestionIndex < questions.length - 1) {
        // Add slide transition effect
        const questionSection = document.querySelector('.question-section');
        if (questionSection) {
            questionSection.style.transform = 'translateX(-100%)';
            questionSection.style.opacity = '0';
        }

        setTimeout(() => {
            currentQuestionIndex++;
            showQuestion();
        }, 200);
    } else {
        showResults();
    }
}

// Go to previous question
function previousQuestion() {
    if (currentQuestionIndex > 0) {
        // Add slide transition effect
        const questionSection = document.querySelector('.question-section');
        if (questionSection) {
            questionSection.style.transform = 'translateX(100%)';
            questionSection.style.opacity = '0';
        }

        setTimeout(() => {
            currentQuestionIndex--;
            showQuestion();
        }, 200);
    }
}

// Update navigation buttons
function updateNavigationButtons() {
    // Get DOM elements
    const prevBtn = document.getElementById('prev-btn');
    
    // Previous button
    if (prevBtn) {
        if (currentQuestionIndex === 0) {
            prevBtn.style.display = 'none';
        } else {
            prevBtn.style.display = 'block';
            prevBtn.disabled = false;
        }
    }
}
