var words=[
["तरकारी","Vegetable","सब्ज़ी; शाक", "A plant or root used as food, especially in dishes."],
["तमाशबीन", "Onlooker", "तमाशा देखने की क्रिया या भाव" , "Someone who watches something that is happening in a public place but is not involved in it"],
["अकसर", "Commonly", "अधिकतर","often or usually"],
["अँगीठी", "Brazier"," आग जलाने का मिट्टी या लोहे का बना चूल्हे जैसा पात्र","A metal container for burning coal, wood, etc."],
["आकाश", "Sky", " आसमान" , "The area above the earth, in which clouds, the sun, etc. can be seen"],
["आज्ञाकारिता" , "Obedience", "आदेश, अनुरोध, या कानून के अनुपालन" ,"Compliance with an order, request, or law."],
["विमान","Airplane", "एक वाहन जो उड़ने के लिए प्रयोग किया जाता है", "A vehicle used to fly"],
["पुस्तकें" , "Books" , "एक लिखित कार्य जिसका प्रयोग शैक्षणिक उद्देश्यों के लिए किया जाता है।" , "A written work which is used for educational purposes."],
["बिस्तर", "Bed", "नींद या आराम के लिए फर्नीचर का एक टुकड़ा" , "A piece of furniture for sleep or rest"],
["इकतालीस", "Forty One", "एक संख्या","A Number"],
["स्नानघर", "Bathroom", "एक कमरा जिसमें शॉवर और एक सिंक और शौचालय शामिल है।", "A room containing shower and also a sink and a toilet."],
["इत्तेफाक", "Coincidence", "कनेक्शन के बिना घटनाओं की एक सहमति।" ,"A concurrence of events without connection."],
["ढोलकिया", "Drummer" , "एक व्यक्ति जो ढोलक बजाता है" ,"A person who plays a drum"],
["ढीलापन", "Laxity","कठोरता या देखभाल की कमी।","Lack of strictness or care."],
["संघर्ष", "Struggle" , "संयम से मुक्त होने के लिए एक सशक्त प्रयास।" , "A forceful effort to get free of restraint."],
["संचारक" , "Communicator" , "एक व्यक्ति जो जानकारी व्यक्त या विनिमय करने में सक्षम है।" , "A person who is able to convey or exchange information."],
["संगदिल", "Melodious" ,"उत्पादन और हैशिंग कृपया धुन"," Poducing or having a pleasant tune"],
["सामान्यतया","Ordinarily","आमतौर पर","In a normal way"],
["साहित्य", "Literature" , "लिखित कार्य जिन्हें श्रेष्ठ या स्थायी कलात्मक योग्यता माना जाता है।" , "Written works which are considered of superior or lasting artistic merit."],
["फलदायक", "Fruitful", "भूमि जो फल की उच्च मात्रा पैदा करती है", "Producing much fruit"],
["नम्रता" , "Meekness", "अधीनता", "Submissiveness."],
["निगरानी" , "Surveillance", "निकट अवलोकन, विशेष रूप से एक संदिग्ध जासूस या आपराधिक के।" ,"Close observation, especially of a suspected spy or criminal."],
["पछतावा", "Remorse", "गलत कार्रवाई के लिए गहरा अफसोस या अपराध","Deep regret or guilt for a wrong committed"],
["पंडिताई", "Scholarship", "अकादमिक अध्ययन या उपलब्धि; एक उच्च स्तर की सीखना","Academic study or achievement; learning of a high level."],
["बचकाना", "Childish" , "एक बच्चे के लिए उपयुक्त है" , "Appropriate to a child"],
["बढ़ोत्तरी" , "Increase" , "बढ़ने या अधिक बनाने का एक उदाहरण।" ,"An instance of growing or making greater."]
];

function getRandomInt(max) { //Get random integer
	return Math.floor(Math.random() * Math.floor(max));
}

var qsNo = 0;

function nWord(){
	var rand = getRandomInt(25);	
	var newWord = words[rand][0]
	console.log(newWord)
	return newWord
}

var x = nWord();
y = x.split("");
console.log(y)
/*for(int i=0; i<y.length; i++){
	$(".apd0 .char").append(spli[i])
}
*/
function animation(){
	$(".container").append("<div class='apd"+qsNo+"'><div class='left'></div><div class='right'></div></div>")
	/*$(".apd"+qsNo+" .left").css({"background": words[rand][1]+".png"})*/
	var  spl = nWord()
	var spli = spl.split("")
	/*for(int i=0; i<spli.length; i++){
		$(".apd"+qsNo+".char").append(spli[i])
	}*/

	$(".rect").css({"width":""})
	$(".container").css({"left":"-100vw"})
	
}

$(".submit").click(function () {
	if(fcheck(anagram)==0){
		qsNo++;
		animation();
	}
})

