// Adhkar data for morning and evening remembrances
const adhkarData = {
    morning: {
        en: [
            {
                arabic: "أَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ",
                translation: "I seek refuge in Allah from Satan, the accursed one.",
                count: "1 time"
            },
            {
                arabic: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
                translation: "In the name of Allah, the Most Gracious, the Most Merciful.",
                count: "1 time"
            },
            {
                arabic: "الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ",
                translation: "All praise is due to Allah, Lord of all the worlds.",
                count: "1 time"
            },
            {
                arabic: "أَصْبَحْنَا وَأَصْبَحَ الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ، لاَ إِلَهَ إِلاَّ اللَّهُ وَحْدَهُ لاَ شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ",
                translation: "We have reached the morning and at this very time all sovereignty belongs to Allah. All praise is for Allah. There is none worthy of worship except Allah, alone, without partner. To Him belongs all sovereignty and praise, and He is over all things omnipotent.",
                count: "1 time"
            },
            {
                arabic: "اللَّهُمَّ بِكَ أَصْبَحْنَا وَبِكَ أَمْسَيْنَا، وَبِكَ نَحْيَا وَبِكَ نَمُوتُ وَإِلَيْكَ النُّشُورُ",
                translation: "O Allah, by Your leave we have reached the morning and by Your leave we have reached the evening, by Your leave we live and die and unto You is our resurrection.",
                count: "1 time"
            },
            {
                arabic: "اللَّهُمَّ أَنْتَ رَبِّي لاَ إِلَهَ إِلاَّ أَنْتَ، خَلَقْتَنِي وَأَنَا عَبْدُكَ، وَأَنَا عَلَى عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ",
                translation: "O Allah, You are my Lord, there is no deity except You. You created me and I am Your servant, and I abide by Your covenant and promise as best I can.",
                count: "1 time"
            },
            {
                arabic: "سُبْحـانَ اللَّهِ وَبِحَمْـدِهِ",
                translation: "How perfect Allah is and I praise Him.",
                count: "100 times"
            }
        ],
        ar: [
            {
                arabic: "أَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ",
                translation: "أعوذ بالله من الشيطان الرجيم",
                count: "مرة واحدة"
            },
            {
                arabic: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
                translation: "بسم الله الرحمن الرحيم",
                count: "مرة واحدة"
            },
            {
                arabic: "الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ",
                translation: "الحمد لله رب العالمين",
                count: "مرة واحدة"
            },
            {
                arabic: "أَصْبَحْنَا وَأَصْبَحَ الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ، لاَ إِلَهَ إِلاَّ اللَّهُ وَحْدَهُ لاَ شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ",
                translation: "أصبحنا وأصبح الملك لله، والحمد لله، لا إله إلا الله وحده لا شريك له، له الملك وله الحمد وهو على كل شيء قدير",
                count: "مرة واحدة"
            },
            {
                arabic: "اللَّهُمَّ بِكَ أَصْبَحْنَا وَبِكَ أَمْسَيْنَا، وَبِكَ نَحْيَا وَبِكَ نَمُوتُ وَإِلَيْكَ النُّشُورُ",
                translation: "اللهم بك أصبحنا وبك أمسينا، وبك نحيا وبك نموت وإليك النشور",
                count: "مرة واحدة"
            },
            {
                arabic: "اللَّهُمَّ أَنْتَ رَبِّي لاَ إِلَهَ إِلاَّ أَنْتَ، خَلَقْتَنِي وَأَنَا عَبْدُكَ، وَأَنَا عَلَى عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ",
                translation: "اللهم أنت ربي لا إله إلا أنت، خلقتني وأنا عبدك، وأنا على عهدك ووعدك ما استطعت",
                count: "مرة واحدة"
            },
            {
                arabic: "سُبْحـانَ اللَّهِ وَبِحَمْـدِهِ",
                translation: "سبحان الله وبحمده",
                count: "100 مرة"
            }
        ],
        id: [
            {
                arabic: "أَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ",
                translation: "Aku berlindung kepada Allah dari setan yang terkutuk.",
                count: "1 kali"
            },
            {
                arabic: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
                translation: "Dengan nama Allah Yang Maha Pengasih lagi Maha Penyayang.",
                count: "1 kali"
            },
            {
                arabic: "الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ",
                translation: "Segala puji bagi Allah, Tuhan semesta alam.",
                count: "1 kali"
            },
            {
                arabic: "أَصْبَحْنَا وَأَصْبَحَ الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ، لاَ إِلَهَ إِلاَّ اللَّهُ وَحْدَهُ لاَ شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ",
                translation: "Kami telah memasuki waktu pagi dan kerajaan adalah milik Allah. Segala puji bagi Allah. Tidak ada Tuhan selain Allah Yang Maha Esa, tidak ada sekutu bagi-Nya. Bagi-Nya kerajaan dan bagi-Nya pujian, dan Dia Maha Kuasa atas segala sesuatu.",
                count: "1 kali"
            },
            {
                arabic: "اللَّهُمَّ بِكَ أَصْبَحْنَا وَبِكَ أَمْسَيْنَا، وَبِكَ نَحْيَا وَبِكَ نَمُوتُ وَإِلَيْكَ النُّشُورُ",
                translation: "Ya Allah, dengan rahmat-Mu kami memasuki waktu pagi dan dengan rahmat-Mu kami memasuki waktu petang, dengan rahmat-Mu kami hidup dan mati, dan kepada-Mu kami akan dibangkitkan.",
                count: "1 kali"
            },
            {
                arabic: "اللَّهُمَّ أَنْتَ رَبِّي لاَ إِلَهَ إِلاَّ أَنْتَ، خَلَقْتَنِي وَأَنَا عَبْدُكَ، وَأَنَا عَلَى عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ",
                translation: "Ya Allah, Engkau adalah Tuhanku, tidak ada Tuhan selain Engkau. Engkau menciptakanku dan aku adalah hamba-Mu, dan aku berada dalam perjanjian dan janji-Mu semampuku.",
                count: "1 kali"
            },
            {
                arabic: "سُبْحـانَ اللَّهِ وَبِحَمْـدِهِ",
                translation: "Maha Suci Allah dan dengan memuji-Nya.",
                count: "100 kali"
            }
        ]
    },
    
    evening: {
        en: [
            {
                arabic: "أَمْسَيْنَا وَأَمْسَى الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ، لاَ إِلَهَ إِلاَّ اللَّهُ وَحْدَهُ لاَ شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ",
                translation: "We have reached the evening and at this very time all sovereignty belongs to Allah. All praise is for Allah. There is none worthy of worship except Allah, alone, without partner. To Him belongs all sovereignty and praise, and He is over all things omnipotent.",
                count: "1 time"
            },
            {
                arabic: "اللَّهُمَّ بِكَ أَمْسَيْنَا وَبِكَ أَصْبَحْنَا، وَبِكَ نَحْيَا وَبِكَ نَمُوتُ وَإِلَيْكَ الْمَصِيرُ",
                translation: "O Allah, by Your leave we have reached the evening and by Your leave we have reached the morning, by Your leave we live and die and unto You is our return.",
                count: "1 time"
            },
            {
                arabic: "اللَّهُمَّ مَا أَمْسَى بِي مِنْ نِعْمَةٍ أَوْ بِأَحَدٍ مِنْ خَلْقِكَ فَمِنْكَ وَحْدَكَ لاَ شَرِيكَ لَكَ، فَلَكَ الْحَمْدُ وَلَكَ الشُّكْرُ",
                translation: "O Allah, whatever blessing has come to me or to any of Your creation this evening is from You alone, without partner. So to You belongs all praise and gratitude.",
                count: "1 time"
            },
            {
                arabic: "أَسْتَغْفِرُ اللَّهَ الْعَظِيمَ الَّذِي لاَ إِلَهَ إِلاَّ هُوَ الْحَيُّ الْقَيُّومُ وَأَتُوبُ إِلَيْهِ",
                translation: "I seek forgiveness from Allah the Mighty, whom there is none worthy of worship except Him, the Living, the Eternal, and I repent to Him.",
                count: "3 times"
            },
            {
                arabic: "سُبْحـانَ اللَّهِ وَبِحَمْـدِهِ",
                translation: "How perfect Allah is and I praise Him.",
                count: "100 times"
            },
            {
                arabic: "لاَ إِلَهَ إِلاَّ اللَّهُ وَحْدَهُ لاَ شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ",
                translation: "There is none worthy of worship except Allah alone, without partner. To Him belongs all sovereignty and praise, and He is over all things omnipotent.",
                count: "10 times"
            }
        ],
        ar: [
            {
                arabic: "أَمْسَيْنَا وَأَمْسَى الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ، لاَ إِلَهَ إِلاَّ اللَّهُ وَحْدَهُ لاَ شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ",
                translation: "أمسينا وأمسى الملك لله، والحمد لله، لا إله إلا الله وحده لا شريك له، له الملك وله الحمد وهو على كل شيء قدير",
                count: "مرة واحدة"
            },
            {
                arabic: "اللَّهُمَّ بِكَ أَمْسَيْنَا وَبِكَ أَصْبَحْنَا، وَبِكَ نَحْيَا وَبِكَ نَمُوتُ وَإِلَيْكَ الْمَصِيرُ",
                translation: "اللهم بك أمسينا وبك أصبحنا، وبك نحيا وبك نموت وإليك المصير",
                count: "مرة واحدة"
            },
            {
                arabic: "اللَّهُمَّ مَا أَمْسَى بِي مِنْ نِعْمَةٍ أَوْ بِأَحَدٍ مِنْ خَلْقِكَ فَمِنْكَ وَحْدَكَ لاَ شَرِيكَ لَكَ، فَلَكَ الْحَمْدُ وَلَكَ الشُّكْرُ",
                translation: "اللهم ما أمسى بي من نعمة أو بأحد من خلقك فمنك وحدك لا شريك لك، فلك الحمد ولك الشكر",
                count: "مرة واحدة"
            },
            {
                arabic: "أَسْتَغْفِرُ اللَّهَ الْعَظِيمَ الَّذِي لاَ إِلَهَ إِلاَّ هُوَ الْحَيُّ الْقَيُّومُ وَأَتُوبُ إِلَيْهِ",
                translation: "أستغفر الله العظيم الذي لا إله إلا هو الحي القيوم وأتوب إليه",
                count: "3 مرات"
            },
            {
                arabic: "سُبْحـانَ اللَّهِ وَبِحَمْـدِهِ",
                translation: "سبحان الله وبحمده",
                count: "100 مرة"
            },
            {
                arabic: "لاَ إِلَهَ إِلاَّ اللَّهُ وَحْدَهُ لاَ شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ",
                translation: "لا إله إلا الله وحده لا شريك له، له الملك وله الحمد وهو على كل شيء قدير",
                count: "10 مرات"
            }
        ],
        id: [
            {
                arabic: "أَمْسَيْنَا وَأَمْسَى الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ، لاَ إِلَهَ إِلاَّ اللَّهُ وَحْدَهُ لاَ شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ",
                translation: "Kami telah memasuki waktu petang dan kerajaan adalah milik Allah. Segala puji bagi Allah. Tidak ada Tuhan selain Allah Yang Maha Esa, tidak ada sekutu bagi-Nya. Bagi-Nya kerajaan dan bagi-Nya pujian, dan Dia Maha Kuasa atas segala sesuatu.",
                count: "1 kali"
            },
            {
                arabic: "اللَّهُمَّ بِكَ أَمْسَيْنَا وَبِكَ أَصْبَحْنَا، وَبِكَ نَحْيَا وَبِكَ نَمُوتُ وَإِلَيْكَ الْمَصِيرُ",
                translation: "Ya Allah, dengan rahmat-Mu kami memasuki waktu petang dan dengan rahmat-Mu kami memasuki waktu pagi, dengan rahmat-Mu kami hidup dan mati, dan kepada-Mu kami akan kembali.",
                count: "1 kali"
            },
            {
                arabic: "اللَّهُمَّ مَا أَمْسَى بِي مِنْ نِعْمَةٍ أَوْ بِأَحَدٍ مِنْ خَلْقِكَ فَمِنْكَ وَحْدَكَ لاَ شَرِيكَ لَكَ، فَلَكَ الْحَمْدُ وَلَكَ الشُّكْرُ",
                translation: "Ya Allah, nikmat apa saja yang telah kuterima di petang hari ini atau yang diterima oleh siapa pun dari makhluk-Mu, maka semuanya datang dari-Mu semata, tidak ada sekutu bagi-Mu. Maka bagi-Mu segala puji dan syukur.",
                count: "1 kali"
            },
            {
                arabic: "أَسْتَغْفِرُ اللَّهَ الْعَظِيمَ الَّذِي لاَ إِلَهَ إِلاَّ هُوَ الْحَيُّ الْقَيُّومُ وَأَتُوبُ إِلَيْهِ",
                translation: "Aku memohon ampun kepada Allah Yang Maha Agung yang tidak ada Tuhan selain Dia, Yang Maha Hidup lagi Maha Berdiri Sendiri, dan aku bertobat kepada-Nya.",
                count: "3 kali"
            },
            {
                arabic: "سُبْحـانَ اللَّهِ وَبِحَمْـدِهِ",
                translation: "Maha Suci Allah dan dengan memuji-Nya.",
                count: "100 kali"
            },
            {
                arabic: "لاَ إِلَهَ إِلاَّ اللَّهُ وَحْدَهُ لاَ شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ",
                translation: "Tidak ada Tuhan selain Allah Yang Maha Esa, tidak ada sekutu bagi-Nya. Bagi-Nya kerajaan dan bagi-Nya pujian, dan Dia Maha Kuasa atas segala sesuatu.",
                count: "10 kali"
            }
        ]
    }
};

window.adhkarData = adhkarData;