let graphData={graphOptions:{attractionForce:1,linkLength:10,repulsionForce:150,centralForce:3,edgePruning:100,minNodeRadius:3,maxNodeRadius:7},isInitialized:!0,paths:["matematika/algebra-nad-poljem.html","matematika/analiza.html","matematika/aritmetička-i-geometrijska-progresija.html","matematika/asimptota.html","matematika/asimptotske-klase.-asimptotska-relacija-ekvivalencije.html","matematika/binomna-formula.html","matematika/binomni-koeficijenti.html","matematika/broj-e.html","matematika/brojevi.html","matematika/bulova-algebra.html","matematika/celi-brojevi.html","matematika/dekartov-proizvod.html","matematika/deljivost.html","matematika/diofantova-jednačina.html","matematika/direktna-i-inverzna-slika-skupa.html","matematika/ekstremum.-nužni-i-dovoljni-uslov-ekstremuma.html","matematika/ekvivalentne-formule.html","matematika/euklidov-algoritam.html","matematika/euklidsko-deljenje.html","matematika/fibonačijevi-i-lukasovi-brojevi.-zlatna-podela.html","matematika/formula-uključenja-isključenja.html","matematika/funkcija.html","matematika/funkcija-generatrisa.html","matematika/grafik-funkcije.html","matematika/inverzna-funkcija.html","matematika/iskazna-logika.html","matematika/izbor-elemenata.html","matematika/izvod.html","matematika/karakteristična-funkcija.html","matematika/kardinalnost.-prebrojivost.html","matematika/kombinatorika.html","matematika/kompozicija-funkcija.html","matematika/kompozicija-i-particija-broja.html","matematika/kongruentnost.html","matematika/konveksnost-i-konkavnost.html","matematika/košijev-niz.html","matematika/kvadratna-matrica.html","matematika/limes-funkcije.html","matematika/limes-niza.html","matematika/linearna-algebra.html","matematika/linearna-zavisnost-i-nezavisnost.-skup-generatora,-baza-i-dimenzija-vp-a.html","matematika/logička-funkcija.html","matematika/logičke-operacije.html","matematika/logika.html","matematika/lopitalova-pravila.html","matematika/matematička-indukcija.html","matematika/matematika.html","matematika/matrica.html","matematika/matrica-relacije.html","matematika/minimalizacija-logičkih-izraza.html","matematika/multinomna-formula.html","matematika/neprekidnost.html","matematika/neprekidnost-osnovnih-funkcija.html","matematika/niz-brojeva.html","matematika/normalne-forme.html","matematika/okolina-tačke.html","matematika/operacije-nad-skupovima.html","matematika/osnovni-limesi.html","matematika/ostrva-(iskazna-logika).html","matematika/particija-skupa.html","matematika/podnizovi.html","matematika/potprostor.-operacije-nad-potprostorima.html","matematika/prebrojavanja.html","matematika/predikatska-logika.html","matematika/prekidi.html","matematika/prirodni-brojevi.html","matematika/projektovanje-vektora-i-skalarni-proizvod-vektora.html","matematika/prost-broj.html","matematika/realni-brojevi.html","matematika/rekurentna-jednačina.html","matematika/relacija.html","matematika/relacija-ekvivalencije.html","matematika/relacija-poretka.html","matematika/svojstva-skupova.html","matematika/tautologija.html","matematika/tejlorov-polinom.html","matematika/teoreme-o-srednjoj-vrednosti.html","matematika/teorija-skupova.html","matematika/valuacija-(iskazna-logika).html","matematika/vektor.html","matematika/vektorski-i-mešoviti-proizvod-vektora.html","matematika/vektorski-prostor.html","matematika/vrste-tačaka-u-odnosu-na-neki-skup.html","računarstvo/dinamička-alokacija-memorije-(c).html","računarstvo/doseg,-životni-vek-i-povezanost-(c).html","računarstvo/funkcije-(c).html","računarstvo/makroi-i-uslovno-prevođenje-(c).html","računarstvo/naredbe-i-kontrola-toka-(c).html","računarstvo/organizacija-izvornog-koda-(c).html","računarstvo/organizacija-memorije-(c).html","računarstvo/pokazivači-(c).html","računarstvo/predstavljanje-podataka-i-operacije-nad-njima-(c).html","računarstvo/programski-jezik-c.html","računarstvo/računarstvo.html","home.html","inverzna-matrica.html","složenost-algoritma.html","standardne-biblioteke-(c).html","standardni-ulaz-i-izlaz-(c).html","zavisnost-koordinata-vektora-i-matrice-operatora-o-bazi.html"],nodeCount:100,linkSources:[0,0,1,1,1,1,1,1,1,1,1,2,3,3,4,4,4,4,5,5,5,5,6,7,7,7,7,8,8,8,8,9,9,9,9,10,10,10,10,10,10,10,10,11,12,12,12,12,13,13,14,14,15,15,16,16,17,17,17,17,18,18,19,19,20,21,21,21,21,21,21,22,22,22,23,23,23,23,23,23,23,24,24,25,25,25,25,25,25,25,25,25,26,26,26,27,27,27,27,27,27,27,27,27,28,29,29,29,29,30,30,30,30,30,30,30,30,30,30,30,30,30,31,31,32,33,33,33,33,34,35,35,35,36,36,36,36,37,37,37,37,37,37,37,37,37,37,37,38,38,38,38,38,39,39,39,39,39,39,40,41,41,42,43,43,43,43,44,45,45,46,46,46,46,46,46,46,46,46,47,47,47,47,47,48,48,49,49,49,50,51,51,51,51,51,51,51,52,53,53,53,53,53,53,53,53,53,53,53,54,54,54,54,54,54,55,55,56,57,57,57,57,58,59,59,60,61,62,63,64,65,65,65,65,65,65,66,67,67,67,68,68,68,68,68,69,69,70,70,70,70,70,70,71,71,71,72,72,72,73,74,74,75,75,76,77,77,77,77,77,77,78,78,79,79,79,79,79,80,81,81,81,81,81,81,81,82,82,83,83,83,84,84,85,85,85,86,86,87,88,88,89,89,90,90,90,91,91,91,92,92,92,92,92,92,92,92,92,92,92,92,93,93,93,93,94,94,95,96,97,98,99],linkTargets:[39,81,46,37,51,27,23,53,38,60,35,53,37,75,37,71,57,96,30,2,26,6,30,68,72,57,52,46,65,10,68,43,72,25,28,8,65,12,18,17,67,13,33,77,65,10,72,17,10,17,21,24,27,34,25,74,65,10,18,12,65,10,30,69,30,46,70,31,24,14,28,30,53,2,1,51,27,76,15,34,3,21,70,43,42,78,74,16,58,41,54,49,30,6,50,1,37,31,24,15,76,44,75,34,21,77,65,10,68,46,62,6,5,50,20,26,32,59,53,22,69,19,21,70,30,10,71,13,67,27,53,60,38,47,81,0,95,1,55,82,51,14,72,57,4,3,44,75,53,37,57,60,35,46,79,47,36,81,0,81,25,21,25,46,25,9,63,27,65,72,94,43,77,70,21,8,39,30,1,39,81,66,36,95,70,42,25,93,54,30,1,37,52,72,64,21,24,51,1,30,21,2,38,57,60,35,22,69,19,25,93,9,42,41,49,68,82,77,37,38,7,4,25,30,69,53,81,30,43,51,8,45,12,18,17,67,79,65,10,12,8,72,7,55,82,30,22,46,11,71,72,48,21,70,33,59,70,77,68,77,25,16,27,3,27,46,56,73,72,11,29,25,21,39,77,71,66,80,79,39,79,47,53,40,61,99,68,55,92,89,90,92,83,92,97,90,92,88,92,92,86,92,83,92,91,89,92,42,97,93,91,87,85,86,90,83,98,97,88,84,89,94,92,96,54,46,93,47,93,92,92,81],labels:["Algebra nad poljem","Analiza","Aritmetička i geometrijska progresija","Asimptota","Asimptotske klase. Asimptotska relacija ekvivalencije","Binomna formula","Binomni koeficijenti","Broj e","Brojevi","Bulova algebra","Celi brojevi","Dekartov proizvod","Deljivost","Diofantova jednačina","Direktna i inverzna slika skupa","Ekstremum. Nužni i dovoljni uslov ekstremuma","Ekvivalentne formule","Euklidov algoritam","Euklidsko deljenje","Fibonačijevi i Lukasovi brojevi. Zlatna podela","Formula uključenja-isključenja","Funkcija","Funkcija generatrisa","Grafik funkcije","Inverzna funkcija","Iskazna logika","Izbor elemenata","Izvod","Karakteristična funkcija","Kardinalnost. Prebrojivost","Kombinatorika","Kompozicija funkcija","Kompozicija i particija broja","Kongruentnost","Konveksnost i konkavnost","Košijev niz","Kvadratna matrica","Limes funkcije","Limes niza","Linearna algebra","Linearna zavisnost i nezavisnost. Skup generatora, baza i dimenzija VP-a","Logička funkcija","Logičke operacije","Logika","Lopitalova pravila","Matematička indukcija","Matematika","Matrica","Matrica relacije","Minimalizacija logičkih izraza","Multinomna formula","Neprekidnost","Neprekidnost osnovnih funkcija","Niz brojeva","Normalne forme","Okolina tačke","Operacije nad skupovima","Osnovni limesi","Ostrva (iskazna logika)","Particija skupa","Podnizovi","Potprostor. Operacije nad potprostorima","Prebrojavanja","Predikatska logika","Prekidi","Prirodni brojevi","Projektovanje vektora i skalarni proizvod vektora","Prost broj","Realni brojevi","Rekurentna jednačina","Relacija","Relacija ekvivalencije","Relacija poretka","Svojstva skupova","Tautologija","Tejlorov polinom","Teoreme o srednjoj vrednosti","Teorija skupova","Valuacija (iskazna logika)","Vektor","Vektorski i mešoviti proizvod vektora","Vektorski prostor","Vrste tačaka u odnosu na neki skup","Dinamička alokacija memorije (C)","Doseg, životni vek i povezanost (C)","Funkcije (C)","Makroi i uslovno prevođenje (C)","Naredbe i kontrola toka (C)","Organizacija izvornog koda (C)","Organizacija memorije (C)","Pokazivači (C)","Predstavljanje podataka i operacije nad njima (C)","Programski jezik C","Računarstvo","Home","Inverzna matrica","Složenost algoritma","Standardne biblioteke (C)","Standardni ulaz i izlaz (C)","Zavisnost koordinata vektora i matrice operatora o bazi"],radii:[4.390532544378698,6.6889792899408285,4.390532544378698,4.691937869822485,4.974852071005917,4.691937869822485,4.390532544378698,4.974852071005917,5.485207100591715,4.974852071005917,6.78698224852071,4.070636094674557,5.485207100591715,4.390532544378698,4.390532544378698,4.390532544378698,4.390532544378698,5.485207100591715,4.691937869822485,4.390532544378698,3.7322485207100593,6.78698224852071,4.974852071005917,5.485207100591715,4.974852071005917,6.970044378698225,4.691937869822485,6.78698224852071,4.070636094674557,4.691937869822485,7,4.390532544378698,3.7322485207100593,4.974852071005917,4.390532544378698,4.974852071005917,4.974852071005917,6.927514792899408,5.712647928994082,6.112056213017752,3.7322485207100593,4.390532544378698,4.691937869822485,5.485207100591715,4.070636094674557,4.070636094674557,6.927514792899408,5.712647928994082,4.070636094674557,4.691937869822485,4.070636094674557,6.284023668639053,4.070636094674557,6.970044378698225,5.712647928994082,4.691937869822485,3.7322485207100593,5.712647928994082,3.7322485207100593,4.390532544378698,4.691937869822485,3.7322485207100593,3.7322485207100593,3.7322485207100593,3.7322485207100593,6.572485207100591,4.070636094674557,4.974852071005917,6.112056213017752,4.974852071005917,6.4375,5.2392751479289945,6.284023668639053,3.7322485207100593,4.390532544378698,4.691937869822485,4.070636094674557,6.4375,4.070636094674557,5.712647928994082,3.7322485207100593,6.572485207100591,4.691937869822485,4.974852071005917,4.070636094674557,4.390532544378698,4.390532544378698,3.7322485207100593,4.390532544378698,4.691937869822485,4.974852071005917,4.691937869822485,7,5.712647928994082,4.390532544378698,4.070636094674557,4.070636094674557,4.390532544378698,3.7322485207100593,3.7322485207100593],linkCount:332}