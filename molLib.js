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
  var mol = "FI in 2 1^FO 1 2 con^A con 22 11^L 11 22 in";
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

}

return mol;
}


