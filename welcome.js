/*var yourAge = prompt("your age?");

if (yourAge exist){

	alert("welcome"+" "+yourAge);

}
else{

	alert("sorry");

}
*/



/*



var yourName = prompt("your name? ما هو اسمك؟");
if (yourName === "") {
    alert("welcome مرحبا بك صلي على النبي");
} else if (yourName) {
    alert("welcome مرحبا بك صلي على النبي"+" "+yourName);
} else {
    alert("welcome مرحبا بك صلي على النبي");
}
*/



var myArray = [
  "الحمد لله",
  "استغفر الله",
  "لا حول و لا قوة الا بالله",
  "فَإِنْ تَوَلَّوْا فَإِنَّمَا عَلَيْكَ الْبَلَاغُ الْمُبِينُ",
  "وَنَبِّئْهُمْ أَنَّ الْمَاءَ قِسْمَةٌ بَيْنَهُمْ ۖ كُلُّ شِرْبٍ مُحْتَضَرٌ",
  "إِنْ هُوَ إِلَّا ذِكْرٌ لِلْعَالَمِينَ", 
  "وَصَدَّهَا مَا كَانَتْ تَعْبُدُ مِنْ دُونِ اللَّهِ ۖ إِنَّهَا كَانَتْ مِنْ قَوْمٍ كَافِرِينَ",
  "وَإِنَّكَ لَعَلَىٰ خُلُقٍ عَظِيمٍ",
  "ذَٰلِكَ بِمَا قَدَّمَتْ يَدَاكَ وَأَنَّ اللَّهَ لَيْسَ بِظَلَّامٍ لِلْعَبِيدِ",
  "أَإِذَا مِتْنَا وَكُنَّا تُرَابًا ۖ ذَٰلِكَ رَجْعٌ بَعِيدٌ",
  "وَآتَيْنَاهُ فِي الدُّنْيَا حَسَنَةً ۖ وَإِنَّهُ فِي الْآخِرَةِ لَمِنَ الصَّالِحِينَه",
  "وَإِنْ يُكَذِّبُوكَ فَقَدْ كَذَّبَتْ قَبْلَهُمْ قَوْمُ نُوحٍ وَعَادٌ وَثَمُودُ",
  "فَضْلًا مِنْ رَبِّكَ ۚ ذَٰلِكَ هُوَ الْفَوْزُ الْعَظِيمُ",
  "فَارْتَقِبْ يَوْمَ تَأْتِي السَّمَاءُ بِدُخَانٍ مُبِينٍ",
  "أَلَمْ تَكُنْ آيَاتِي تُتْلَىٰ عَلَيْكُمْ فَكُنْتُمْ بِهَا تُكَذِّبُونَ",
  "قَالُوا أَضْغَاثُ أَحْلَامٍ ۖ وَمَا نَحْنُ بِتَأْوِيلِ الْأَحْلَامِ بِعَالِمِينَ",
  "سُبْحَانَهُ وَتَعَالَىٰ عَمَّا يَقُولُونَ عُلُوًّا كَبِيرًا",
  "قَالَ بَلْ فَعَلَهُ كَبِيرُهُمْ هَٰذَا فَاسْأَلُوهُمْ إِنْ كَانُوا يَنْطِقُونَ",
  "بَشِيرًا وَنَذِيرًا فَأَعْرَضَ أَكْثَرُهُمْ فَهُمْ لَا يَسْمَعُونَ",
  "وَلَا تَلْبِسُوا الْحَقَّ بِالْبَاطِلِ وَتَكْتُمُوا الْحَقَّ وَأَنْتُمْ تَعْلَمُونَ",
];

var randomItem = myArray[Math.floor(Math.random()*myArray.length)];

alert(randomItem);