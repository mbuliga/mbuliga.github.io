/* 
mol library, mol files from https://github.com/chorasimilarity/chemlambda-gui/tree/gh-pages/dynamic/mol
*/




function molLibrary(molName) {

switch (molName) {
  case "16_quine_A_L_FI_FO":
  var mol = "FO a1 a2 a3^L a4 a5 a7^FO a6 a8 a9^FOE a10 a11 a12^FI a7 a20 a10^FI a2 a8 a6^FOE a17 a13 a14^FI a3 a9 a16^A a11 a13 a21^A a12 a14 a4^FI a19 a16 a20^FI a5 a22 a17^FOE a21 a18 a23^FI a15 a24 a22^L a18 a24 a1^L a23 a15 a19";
  break;

  case "20_quine":
  var mol = "FOE 6 16 7^A 15 2 6^L 20 35 36^A 36 1 37^FOE 8 18 9^A 17 7 8^FI 28 42 26^FOE 26 30 17^FI 38 39 24^FOE 24 1 15^L 9 19 10^FOE 10 20 11^A 30 16 27^FI 33 32 38^FI 19 31 28^FI 21 35 34^FI 34 37 33^L 27 42 39^L 18 31 32^L 11 21 2";
  break;

  case "28_quine":
  var mol = "FOE 2 12 3^FOE 3 13 4^FOE 4 14 5^FOE 6 16 7^FOE 8 18 9^FOE 10 20 11^FOE 24 29 15^FOE 26 30 17^A 12 22 1^A 23 13 22^A 41 25 40^A 15 5 6^A 29 14 25^A 30 16 27^A 17 7 8^A 36 1 37^FI 28 42 26^FI 33 32 38^FI 38 39 24^FI 19 31 28^FI 21 35 34^FI 34 37 33^L 40 41 23^L 27 42 39^L 18 31 32^L 9 19 10^L 20 35 36^L 11 21 2";
  break;

  case "3_3_FI_FO_A_L":
  var mol = "A 0 1 2^L 2 1 3^FI 3 4 5^FO 5 4 0";
  break;

  case "9_quine":
  var mol = "FOE 1 11 10^FOE 9 17 16^FOE 7 15 14^A 8 6 5^A 16 14 6^A 17 15 7^FI 12 13 1^L 10 12 8^L 11 13 9";
  break;

  case "10_quine_bubbles":
  var mol = "L 5 1 2^FI 1 7 6^A 2 3 4^FI 4 6 9^L 8 7 10^FOE 9 5 8^FOE 10 12 11^A 12 15 13^FOE 13 15 14^A 11 14 3";
  break;

  case "20_20_hybrid":
  var mol = "FOE 6a 16 7bc^FOE 8 18 9b^FOE 10a 20 11b^FOE 24 1 15b^FOE 26a 30 17b^A 15 2 6b^A 30a 16 27b^A 17 7 8b^A 36a 1 37b^FI 28 42 26b^FI 33a 32 38b^FI 38 39 24b^FI 19a 31 28b^FI 21 35 34b^FI 34a 37 33b^L 27 42 39b^L 18a 31 32b^L 9 19 10b^L 20a 35 36b^L 11 21 2b^FOE 6 16a 7abc^FOE 8a 18a 9ab^FOE 10 20a 11ab^FOE 24a 1a 15ab^FOE 26 30a 17ab^A 15a 2a 6ab^A 30 16a 27ab^A 17a 7a 8ab^A 36 1a 37ab^FI 28a 42a 26ab^FI 33 32a 38ab^FI 38a 39a 24ab^FI 19 31a 28ab^FI 21a 35a 34ab^FI 34 37a 33ab^L 27a 42a 39ab^L 18 31a 32ab^L 9a 19a 10ab^L 20 35a 36ab^L 11a 21a 2ab^FOE 6ab 16b 7c^FOE 8b 18b 9^FOE 10ab 20b 11^FOE 24b 1b 15^FOE 26ab 30b 17^A 15b 2b 6^A 30ab 16b 27^A 17b 7b 8^A 36ab 1b 37^FI 28b 42b 26^FI 33ab 32b 38^FI 38b 39b 24^FI 19ab 31b 28^FI 21b 35b 34^FI 34ab 37b 33^L 27b 42b 39^L 18ab 31b 32^L 9b 19b 10^L 20ab 35b 36^L 11b 21b 2^FOE 6b 16ab 7ac^FOE 8ab 18ab 9a^FOE 10b 20ab 11a^FOE 24ab 1ab 15a^FOE 26b 30ab 17a^A 15ab 2ab 6a^A 30b 16ab 27a^A 17ab 7ab 8a^A 36b 1ab 37a^FI 28ab 42ab 26a^FI 33b 32ab 38a^FI 38ab 39ab 24a^FI 19b 31ab 28a^FI 21ab 35ab 34a^FI 34b 37ab 33a^L 27ab 42ab 39a^L 18b 31ab 32a^L 9ab 19ab 10a^L 20b 35ab 36a^L 11ab 21ab 2a^FOE 6ac 16c 7b^FOE 8c 18c 9bc^FOE 10ac 20c 11bc^FOE 24c 1c 15bc^FOE 26ac 30c 17bc^A 15c 2c 6bc^A 30ac 16c 27bc^A 17c 7c 8bc^A 36ac 1c 37bc^FI 28c 42c 26bc^FI 33ac 32c 38bc^FI 38c 39c 24bc^FI 19ac 31c 28bc^FI 21c 35c 34bc^FI 34ac 37c 33bc^L 27c 42c 39bc^L 18ac 31c 32bc^L 9c 19c 10bc^L 20ac 35c 36bc^L 11c 21c 2bc^FOE 6c 16ac 7ab^FOE 8ac 18ac 9abc^FOE 10c 20ac 11abc^FOE 24ac 1ac 15abc^FOE 26c 30ac 17abc^A 15ac 2ac 6abc^A 30c 16ac 27abc^A 17ac 7ac 8abc^A 36c 1ac 37abc^FI 28ac 42ac 26abc^FI 33c 32ac 38abc^FI 38ac 39ac 24abc^FI 19c 31ac 28abc^FI 21ac 35ac 34abc^FI 34c 37ac 33abc^L 27ac 42ac 39abc^L 18c 31ac 32abc^L 9ac 19ac 10abc^L 20c 35ac 36abc^L 11ac 21ac 2abc^FOE 6abc 16bc 7^FOE 8bc 18bc 9c^FOE 10abc 20bc 11c^FOE 24bc 1bc 15c^FOE 26abc 30bc 17c^A 15bc 2bc 6c^A 30abc 16bc 27c^A 17bc 7bc 8c^A 36abc 1bc 37c^FI 28bc 42bc 26c^FI 33abc 32bc 38c^FI 38bc 39bc 24c^FI 19abc 31bc 28c^FI 21bc 35bc 34c^FI 34abc 37bc 33c^L 27bc 42bc 39c^L 18abc 31bc 32c^L 9bc 19bc 10c^L 20abc 35bc 36c^L 11bc 21bc 2c^FOE 6bc 16abc 7a^FOE 8abc 18abc 9ac^FOE 10bc 20abc 11ac^FOE 24abc 1abc 15ac^FOE 26bc 30abc 17ac^A 15abc 2abc 6ac^A 30bc 16abc 27ac^A 17abc 7abc 8ac^A 36bc 1abc 37ac^FI 28abc 42abc 26ac^FI 33bc 32abc 38ac^FI 38abc 39abc 24ac^FI 19bc 31abc 28ac^FI 21abc 35abc 34ac^FI 34bc 37abc 33ac^L 27abc 42abc 39ac^L 18bc 31abc 32ac^L 9abc 19abc 10ac^L 20bc 35abc 36ac^L 11abc 21abc 2ac";
  break;

  case "16_quine_A_L_FI_FO_duplicate":
  var mol = "FO a1 a2 a3^L a4 a5 a7^FO a6 a8 a9^FOE a10 a11 a12^FI a7 a20 a10^FI a2 a8 a6^FOE a17 a13 a14^FI a33 a9 a16^A a11 a13 a21^A a12 a14 a4^FI a19 a16 a20^FI a5 a22 a17^FOE a21 a18 a23^FI a15 a24 a22^L a18 a24 a1^L a23 a15 a19^FI a3 2 1^FO 1 2 a33";
  break;

  case "bigpred_train":
  var mol = "FOE 2 12 3a^A 12 22a 1^FOE 3a na1 3o1^A na1 22a1 22a^FOE 3o1 na2 3o2^A na2 22a2 22a1^FOE 3o2 na3 3o3^A na3 22a3 22a2^FOE 3o3 na4 3o4^A na4 22a4 22a3^FOE 3o4 na5 3o5^A na5 22a5 22a4^FOE 3o5 na6 3o6^A na6 22a6 22a5^FOE 3o6 na7 3o7^A na7 22a7 22a6^FOE 3o7 na8 3o8^A na8 22a8 22a7^FOE 3o8 na9 3o9^A na9 22a9 22a8^FOE 3o9 na10 3o10^A na10 22a10 22a9^FOE 3o10 na11 3o11^A na11 22a11 22a10^FOE 3o11 na12 3o12^A na12 22a12 22a11^FOE 3o12 na13 3o13^A na13 22a13 22a12^FOE 3o13 na14 3o14^A na14 22a14 22a13^FOE 3o14 na15 3o15^A na15 22a15 22a14^FOE 3o15 na16 3o16^A na16 22a16 22a15^FOE 3o16 na17 3o17^A na17 22a17 22a16^FOE 3o17 na18 3o18^A na18 22a18 22a17^FOE 3o18 na19 3o19^A na19 22a19 22a18^FOE 3o19 na20 3o20^A na20 22a20 22a19^FOE 3o20 na21 3o21^A na21 22a21 22a20^FOE 3o21 na22 3o22^A na22 22a22 22a21^FOE 3o22 na23 3o23^A na23 22a23 22a22^FOE 3o23 na24 3o24^A na24 22a24 22a23^FOE 3o24 na25 3o25^A na25 22a25 22a24^FOE 3o25 na26 3o26^A na26 22a26 22a25^FOE 3o26 na27 3o27^A na27 22a27 22a26^FOE 3o27 na28 3o28^A na28 22a28 22a27^FOE 3o28 na29 3o29^A na29 22a29 22a28^FOE 3o29 na30 3o30^A na30 22a30 22a29^FOE 3o30 na31 3o31^A na31 22a31 22a30^FOE 3o31 na32 3^A na32 22 22a31^FOE 3 13 4^FOE 4 14 5^FOE 6 16 7^FOE 8 18 9^FOE 10 20 11^FOE 24 29 15^FOE 26 30 17^A 23 13 22^A 41 25 40^A 15 5 6^A 29 14 25^A 30 16 27^A 17 7 8^A 36 1 37^FI 28 42 26^FI 33 32 38^FI 38 39 24^FI 19 31 28^FI 21 35 34^FI 34 37 33^L 40 41 23^L 27 42 39^L 18 31 32^L 9 19 10^L 20 35 36^L 11 21 2";
  break;

  case "spiral_boole_construct":
  var mol = "A inter outunu out^A num outsuc inter^L 1num fnum num^L 2num xnum 1num^FO fnum m1num le1num^A m1num ri1num 2num^FO le1num m2num le2num^A m2num ri2num ri1num^FO le2num m3num le3num^A m3num ri3num ri2num^FO le3num m4num le4num^A m4num ri4num ri3num^FO le4num m5num m6num^A m5num ri5num ri4num^A m6num xnum ri5num^A 0eu 0a2 0a1^A 0a1 0n 0wu^A 0a7 0a6 0ed^L 0a8 0a7 0s^A 0a5 0wd 0a6^L 0a9 0a9 0a8^L 0a4 0a3 0a2^L 0a3 0a5 0a4^A 1eu 1a2 1a1^A 1a1 1n 0eu^A 1a7 1a6 1ed^L 1a8 1a7 1s^A 1a5 0ed 1a6^L 1a9 1a9 1a8^L 1a4 1a3 1a2^L 1a3 1a5 1a4^A 2eu 2a2 2a1^A 2a1 2n 1eu^A 2a7 2a6 2ed^L 2a8 2a7 2s^A 2a5 1ed 2a6^L 2a9 2a9 2a8^L 2a4 2a3 2a2^L 2a3 2a5 2a4^A 3eu 3a2 3a1^A 3a1 3n 2eu^A 3a7 3a6 3ed^L 3a8 3a7 3s^A 3a5 2ed 3a6^L 3a9 3a9 3a8^L 3a4 3a3 3a2^L 3a3 3a5 3a4^A 4eu 4a2 4a1^A 4a1 4n 3eu^A 4a7 4a6 4ed^L 4a8 4a7 4s^A 4a5 3ed 4a6^L 4a9 4a9 4a8^L 4a4 4a3 4a2^L 4a3 4a5 4a4^A 5eu 5a2 5a1^A 5a1 5n 4eu^A 5a7 5a6 5ed^L 5a8 5a7 5s^A 5a5 4ed 5a6^L 5a9 5a9 5a8^L 5a4 5a3 5a2^L 5a3 5a5 5a4^A ar1 ar0 5eu^A ar2 5s ar1^A ar3 4s ar2^A ar4 3s ar3^A ar5 2s ar4^A ar6 1s ar5^A ar7 0s ar6^A ar8 5ed ar7^L 0wu ar0 br1^L br1 5n br2^L br2 4n br3^L br3 3n br4^L br4 2n br5^L br5 1n br6^L br6 0n br7^L br7 0wd br8^L br8 ar8 outsuc^L p0wu par0 pbr1^L pbr1 p5n pbr2^L pbr2 p4n pbr3^L pbr3 p3n pbr4^L pbr4 p2n pbr5^L pbr5 p1n pbr6^L pbr6 p0n pbr7^L pbr7 p0wd outunu^^A p5n par1 p5eu^A p4n par2 par1^A p3n par3 par2^A p2n par4 par3^A p1n par5 par4^A p0n par6 par5^A p0wd par0 par6";
  break;

  case "tubefact":
  var mol = "L 0p lp outsuc^L 1s lfs 0p^L 0s 1in 1s^L 0i 0in 0s^A 1i 0out 0i^A 0f 1out 1i^A lp lfs 0f^FO 1in a b^A succ a 1out^A tms b c^A c 0in 0out^L 1succ nsucc succ^L 2succ ssucc 1succ^L 3succ zsucc 2succ^A 4succ 6succ 3succ^FO ssucc 4succ 5succ^A 7succ zsucc 6succ^A nsucc 5succ 7succ^L 1tms mtms tms^L 2tms ntms 1tms^L 3tms ftms 2tms^A mtms 4tms 3tms^A ntms ftms 4tms^A inter outunu out^A num outsuc inter^L p1s plfs outunu^L p0s p1in p1s^L p0i p0in p0s^A plfs p1in p1i^A p1i p0in p0i^A out 1numb numbers^A numbers 1nums 2numb^A 2numb 2nums outfinal^L 11nums f1nums 1nums^L 21nums x1nums 11nums^A f1nums x1nums 21nums^L 12nums f2nums 2nums^L 22nums x2nums 12nums^A f2nums x2nums 22nums^L 1num fnum num^L 2num xnum 1num^FO fnum m1num le1num^A m1num ri1num 2num^FO le1num m2num le2num^A m2num ri2num ri1num^FO le2num m3num le4num^A m3num ri4num ri2num^FO le4num m5num m6num^A m5num ri5num ri4num^A m6num xnum ri5num";
  break;

  case "ackermann_3_2":
  var mol = "A 1 cb o^A 2 ca 1^L 3 a 2^L 4 b 3^A 5 b 4^A 6 sp1 5^A a f 6^L 1s1 ns1 sp1^L 2s1 ss1 1s1^L 3s1 zs1 2s1^A 4s1 5s1 3s1^A 6s1 zs1 5s1^A ns1 7s1 6s1^FO ss1 4s1 7s1^L 1f Af f^L 2f bf 1f^A 3f cone 2f^A 4f Af 3f^A sp2 bf 4f^L 1s2 ns2 sp2^L 2s2 ss2 1s2^L 3s2 zs2 2s2^A 4s2 5s2 3s2^A 6s2 zs2 5s2^A ns2 7s2 6s2^FO ss2 4s2 7s2^L 1cone fcone cone^L 2cone xcone 1cone^A fcone xcone 2cone^L 1ca fca ca^L 2ca xca 1ca^A 3ca 5ca 2ca^FO fca 3ca 4ca^A 6ca 8ca 5ca^FO 4ca 6ca 7ca^A 7ca xca 8ca^L 1cb fcb cb^L 2cb xcb 1cb^A 3cb 4cb 2cb^A 5cb xcb 4cb^FO fcb 3cb 5cb";
  break;

  case "pwheel_8":
  var mol = "A p1 p1b p1a^FOE p1a p1out p1b^A p2 p2b p2a^FOE p2a p2out p2b^A p3 p3b p3a^FOE p3a p3out p3b^A p4 p4b p4a^FOE p4a p4out p4b^A p5 p5b p5a^FOE p5a p5out p5b^A p6 p6b p6a^FOE p6a p6out p6b^A p7 p7b p7a^FOE p7a p7out p7b^A p8 p8b p8a^FOE p8a p8out p8b^L a8 a1 p1^L a1 a2 p2^L a2 a3 p3^L a3 a4 p4^L a4 a5 p5^L a5 a6 p6^L a6 a7 p7^L a7 a8 p8";
  break;

  case "claudia_starmaker":
  var mol = "FI dcba3 dcba1 dcba15^FOE dcba15 dcba4 dcb2^L dcba4 dcba1 dcba5^L dcba2 dcba3 dcba12^FOE dcba5 dcba6 dcba8^FOE dcba12 dcba7 dcba9^A dcba6 dcba7 dcba14^A dcba8 dcba9 dcba11^FO dcba10 dcba17 dcba20^FO dcba16 dcba19 dcba18^FI dcba17 dcba19 dcba16^FI dcba20 dcba18 dcba13^A dcba13 dcba11 dcba10^FI dcb3 dcb1 dcb15^FOE dcb15 dcb4 dc2^L dcb4 dcb1 dcb5^L dcb2 dcb3 dcb12^FOE dcb5 dcb6 dcb8^FOE dcb12 dcb7 dcb9^A dcb6 dcb7 dcb14^A dcb8 dcb9 dcb11^FO dcb10 dcb17 dcb20^FO dcb16 dcb19 dcb18^FI dcb17 dcb19 dcb16^FI dcb20 dcb18 dcb13^A dcb13 dcb11 dcb10^FI dc3 dc1 dc15^FOE dc15 dc4 d2^L dc4 dc1 dc5^L dc2 dc3 dc12^FOE dc5 dc6 dc8^FOE dc12 dc7 dc9^A dc6 dc7 dc14^A dc8 dc9 dc11^FO dc10 dc17 dc20^FO dc16 dc19 dc18^FI dc17 dc19 dc16^FI dc20 dc18 dc13^A dc13 dc11 dc10^FI d3 d1 d15^FOE d15 d4 2^L d4 d1 d5^L d2 d3 d12^FOE d5 d6 d8^FOE d12 d7 d9^A d6 d7 d14^A d8 d9 d11^FO d10 d17 d20^FO d16 d19 d18^FI d17 d19 d16^FI d20 d18 d13^A d13 d11 d10^FI 3 1 15^FOE 15 4 dcba2^L 4 1 5^L 2 3 12^FOE 5 6 8^FOE 12 7 9^A 6 7 14^A 8 9 11^FO 10 17 20^FO 16 19 18^FI 17 19 16^FI 20 18 13^A 13 11 10";
  break;



case "random_egg_A_L_FI_FO":
  var shu = [];
  for (var i=0; i<6; i++) {
    shu.push(i);
  }
  var mi = 6, tm, ii;
  // While there remain elements to shuffle
  while (mi) {
    // Pick a remaining element
    ii = Math.floor(Math.random() * mi--);
    // And swap it with the current element.
    tm = shu[mi];
    shu[mi] = shu[ii];
    shu[ii] = tm;
  }
  var mol = "A 0 1 " + shu[0] + "^L 2 " + shu[1] + " " + shu[2] + "^FI 3 4 " + shu[3] + "^FO 5 " + shu[4] + " " + shu[5];
  break;

  case "spark_243501":
  var mol = "A 0 1 2^L 2 4 3^FI 3 4 5^FO 5 0 1";
  break;

  case "spark_245013":
  var mol = "A 0 1 2^L 2 4 5^FI 3 4 0^FO 5 1 3";
  break;

  case "bubble_214503":
  var mol = "A 0 1 2^L 2 1 4^FI 3 4 5^FO 5 0 3";
  break;

  case "spark_spark":
  var mol = "A 0s 1s 2s^L 2s 4s 5s^FI 3s 4s 0s^FO 5s 1s 3s^A 0 1 2^L 2 4 3^FI 3 4 5^FO 5 0 1";
  break;


  case "x_214530":
  var mol = "A 0 1 2^L 2 1 4^FI 3 4 5^FO 5 3 0";
  break;

  case "seed_021543":
  var mol = "FI 3 4 5^FO 5 4 3";
  break;

  case "x_413520":
  var mol = "A 0 1 4^L 2 1 3^FI 3 4 5^FO 5 2 0";
  break;

  case "x_541023":
  var mol = "A 0 1 5^L 2 4 1^FI 3 4 0^FO 5 2 3";
  break;

  case "x_541032":
  var mol = "A 0 1 5^L 2 4 1^FI 3 4 0^FO 5 3 2";
  break;

  case "x_543120":
  var mol = "A 0 1 5^L 2 4 3^FI 3 4 1^FO 5 2 0";
  break;

  case "x_013524":
  var mol = "A 0 1 0^L 2 1 3^FI 3 4 5^FO 5 2 4";
  break;

  case "x_401532":
  var mol = "A 0 1 4^L 2 0 1^FI 3 4 5^FO 5 3 2";
  break;

  case "x_235014":
  var mol = "A 0 1 2^L 2 3 5^FI 3 4 0^FO 5 1 4";
  break;

  case "paradox":
  var mol = "A 1 outa out^A 1a out outa^L 2 3 1^A 4 7 2^A 6 5 4^FO 8 6 7^FO 3 9 10^A 9 10 8^L 2a 3a 1a^A 4a 7a 2a^A 6a 5a 4a^FO 8a 6a 7a^FO 3a 9a 10a^A 9a 10a 8a";
  break;

}
return mol;
}


