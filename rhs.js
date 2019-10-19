// all possible RHS of DIST rewrites
// 18.10.2019, Marius Buliga

var perm = [
[0,1,2,3],
[1,2,1,3],
[1,1,3,2],
[0,2,3,1],
[0,3,1,2],
[1,3,2,1]
];

var sign = [0,1];
var sg = ["+","-"];

var permInv = [0,1,2,4,3,5];

// The nodes are related to the anharmonic group. The 0-1 array tells how the ports are oriented, i.e. ports 1,3 are always oriented 
// "in", "out" and the port "2" is oriented according to the sign of the (inverse of the) permutation associated.  
//  "L":  [0,1,1], // (12) , 1-z 
//  "FOX": [0,1,1], // (13) , z/(z-1)
//  "FOE":[0,1,1], // (23) , 1/z 
//  "D": [0,0,1],  // ()   , z
//  "A":  [0,0,1], // (231), (z-1)/z
//  "FI": [0,0,1], // (312), 1/(1-z)
// 
// mind that "A" and "FI" are switched, because if A = D_perm[4] then A = 3,  nodeNames[permInv[4]] = D_perm[4]. Otherwise said, the  
//
// this is because the element of the anharmonic group associated with the node nodeNames[i] is permInv[i]
//
// There is a node FO which is not in this list, because it has another explanation. 

var nodeNames = ["D","L","FOE","A","FI","FOX"]; 
// just the signs of the permutations associated
var signNodeNames = [0,1,1,0,0,1];

function namesNode(h) {
  switch (h) {
    case "D":
    var ret = 0;
    break;
    case "L":
    var ret = 1;
    break;
    case "FOE":
    var ret = 2;
    break;
    case "A":
    var ret = 3;
    break;
    case "FI":
    var ret = 4;
    break;
    case "FOX":
    var ret = 5;
    break;
  }
  return ret;
}
// types of DIST rewrites RHS edge connections

var distArray = [
"a-1^b-1^c-1^d-3^3-2^2-1^2-3^3-2",  // DIST0
"a-1^b-1^c-3^d-3^2-1^3-1^2-2^3-2",  // DIST1
"a-1^b-1^c-3^d-3^3-1^2-2^2-2^3-1",  // DIST2
"a-1^b-1^c-1^d-3^2-3^3-1^2-2^3-2",  // DIST3
"a-1^b-3^c-1^d-3^2-2^3-1^1-3^2-2",  // DIST4
"a-1^b-3^c-1^d-3^2-3^3-1^2-2^1-2",  // DIST5
"a-1^b-3^c-3^d-3^2-1^3-2^1-2^2-1",  // DIST6
"a-1^b-3^c-3^d-3^2-1^3-1^2-2^1-2"   // DIST7
];



function distType(h) {
  switch (h) {
    case "a-1^b-1^c-1^d-3^3-2^2-1^2-3^3-2":
    var ret = "DIST0";
    break;
    case "a-1^b-1^c-3^d-3^2-1^3-1^2-2^3-2":
    var ret = "DIST1";
    break;
    case "a-1^b-1^c-3^d-3^3-1^2-2^2-2^3-1":
    var ret = "DIST2";
    break;
    case "a-1^b-1^c-1^d-3^2-3^3-1^2-2^3-2":
    var ret = "DIST3";
    break;
    case "a-1^b-3^c-1^d-3^2-2^3-1^1-3^2-2":
    var ret = "DIST4";
    break;
    case "a-1^b-3^c-1^d-3^2-3^3-1^2-2^1-2":
    var ret = "DIST5";
    break;
    case "a-1^b-3^c-3^d-3^2-1^3-2^1-2^2-1":
    var ret = "DIST6";
    break;
    case "a-1^b-3^c-3^d-3^2-1^3-1^2-2^1-2":
    var ret = "DIST7";
    break;
  }
  return ret;
}

// string needed to write the DIST rewrites rewirings

var distRewrite = "";

for (var distNr=0; distNr<distArray.length; distNr++) {
  var rewrString = distArray[distNr];
  var edgeString = rewrString.split("^");
  var edgeStringDet = [];
  for (var distNr1=0; distNr1<edgeString.length; distNr1++) {
  var edgeAdd = edgeString[distNr1].split("-");
  edgeStringDet.push(edgeAdd);
  } 
  distRewrite += "    case \"DIST" + distNr + "\":<br>      var na = addNodeAndEdges(trans.t1,n2.x,n2.y);<br>      var nb = addNodeAndEdges(trans.t2,n2.x,n2.y);<br>      var nc = addNodeAndEdges(trans.t3,n1.x,n1.y);<br>      var nd = addNodeAndEdges(trans.t4,n1.x,n1.y);<br>";
  distRewrite += "      addLink(na[" + edgeStringDet[4][0] + "],nc[" + edgeStringDet[4][1] + "],2);<br>";
  distRewrite += "      addLink(na[" + edgeStringDet[5][0] + "],nd[" + edgeStringDet[5][1] + "],2);<br>";
  distRewrite += "      addLink(nb[" + edgeStringDet[6][0] + "],nc[" + edgeStringDet[6][1] + "],2);<br>";
  distRewrite += "      addLink(nb[" + edgeStringDet[7][0] + "],nd[" + edgeStringDet[7][1] + "],2);<br>";

  distRewrite += "      moveLink1(a,na[" + edgeStringDet[0][1] + "]);<br>"; 
  distRewrite += "      moveLink1(b,nb[" + edgeStringDet[1][1] + "]);<br>";
  distRewrite += "      moveLink1(c,nc[" + edgeStringDet[2][1] + "]);<br>";
  distRewrite += "      moveLink1(d,nd[" + edgeStringDet[3][1] + "]);<br>";

  distRewrite += "      removeNodeAndEdges(n1);<br>      removeNodeAndEdges(n2);<br>      break;<br>";

}

// uncomment the next line to have a list of DIST0---DIST7 RHS edges. This does not give you the right nodes, which is the purpose of the rest of the program
//document.getElementById("alldist").innerHTML = distRewrite;

// list of left patterns of rewrites which are already taken, not used further
var alreadyTaken = ["L-A","FI-FOE","D-FOX"];




// this is an operation related to the anharmonic group, which is used to find the right nodes. 

// anh[i][j] = id of perm[i] composed with permInv[j]
//
// nodeNames[anh[i][j]] = nodeNames[i]_nodeNames[permInv[j]] which is the same as
//
// j = permInv[namesNode("node")];
// i = namesNode("node1");
// node1ComposedWithnode = nodeNames[anh[i][j]];
//
var anh = [
[0,1,2,4,3,5],
[1,0,3,5,2,4],
[2,4,0,1,5,3],
[3,5,1,0,4,2],
[4,2,5,3,0,1],
[5,3,4,2,1,0]
];


//            THE LHS NOTATION
//
//          a                       c
//           \_1                 2_/
//            \      e2    e1     /
//             \                 /
//  n2type  n2  o----|-----|----o   n1  n1type
//             /     3     1     \
//          2_/                   \_3
//           /                     \
//          b                       d
//

//  THE RHS ABSOLUTE PORTS PLACEMENT AND NOTATION  (related to the "shuffle trick", or (convex) axiom from em-convex)    
//
//            a                       c
//             \_1                 3_/
//              \                   /
//               \     2     1     /
// n1type  na/t1  o----|-----|----o  nc/t3  n2type
//                 \      u      /
//                3_\           /_2
//                   \         /
//                    \       /  
//                   v \     / w 
//                      \   /  
//                       \ /
//                        X        
//                       / \
//                      /   \             
//                     /     \
//                  w /       \ v
//                   /         \     
//                2_/           \_1
//                 /   3     2   \
// n1type  nb/t2  o----|-----|----o  nd/t4  n2type
//               /        p        \ 
//            1_/                   \_3 
//             /                     \
//            b                       d
//



var a = 1;  // a = 1 means that the port linked with a should have sign 0 so that (1+0)%2=1
var d = 0; // same explanation as the one for a. Mind that a and d are fixed

// if b=1 then n2 has sign +, if b=0 then n2 has sign -
// if c=1 then n1 has sign +, if c=0 then n1 has sign -

// thus there are 4 cases:  (n2,n1)
// (+,+) for b=1,c=1
// (+,-) for b=1,c=0
// (-,+) for b=0,c=1
// (-,-) for b=0,c=0


var n2type = "D";
var n1type = "D";



function rhs(n2typ,n1typ) {

var n2id = namesNode(n2typ); 
var n1id = namesNode(n1typ);

var leftName = n2typ + "-" + n1typ;

var b = 1 - perm[n2id][0];
var c = 1 - perm[n1id][0];


var result = "";
var wholemoveshape = "";
var counter = 0;

var leftPattern = n2typ + " a b e^" + n1typ + " e c d <br><br>";


document.getElementById("leftpat").innerHTML = leftPattern;

for (var ia=0; ia<12; ia++) {
  var ias = ia % 2;
  var iap = (ia - ias) / 2;
  var na = [ias,perm[iap][1],perm[iap][2], perm[iap][3]];
  var naNode = ["","","",""];
  var naInv = [0,0,0,0];
  var ja = permInv[n1id];
  naNode[0] = nodeNames[anh[iap][ja]];
  var asign = signNodeNames[namesNode(naNode[0])];
  naNode[na[1]] = "a";
  naNode[na[2]] = "u";
  naNode[na[3]] = "v";
  naInv[0] = ias;
  naInv[na[1]] = 1;
  naInv[na[2]] = 2;
  naInv[na[3]] = 3; 
  var sna = [ias,0,ias,1];
  var checka = (a + sna[na[1]]) % 2;

  for (var ib=0; ib<12; ib++) {
    var ibs = ib % 2;
    var ibp = (ib - ibs) / 2;
    var nb = [ibs,perm[ibp][1],perm[ibp][2], perm[ibp][3]];
    var nbNode = ["","","",""];
    var nbInv = [0,0,0,0];
    var jb = permInv[n1id];
    nbNode[0] = nodeNames[anh[ibp][jb]];
    var bsign = signNodeNames[namesNode(nbNode[0])];
    nbNode[nb[1]] = "b";
    nbNode[nb[2]] = "w";
    nbNode[nb[3]] = "p";
    nbInv[0] = ibs;
    nbInv[nb[1]] = 1;
    nbInv[nb[2]] = 2;
    nbInv[nb[3]] = 3; 
    var snb = [ibs,0,ibs,1];
    var checkb = (b + snb[nb[1]]) % 2;

    for (var ic=0; ic<12; ic++) {
      var ics = ic % 2;
      var icp = (ic - ics) / 2;
      var nc = [ics,perm[icp][1],perm[icp][2], perm[icp][3]];
      var ncNode = ["","","",""];
      var ncInv = [0,0,0,0];
      var jc = permInv[n2id];
      ncNode[0] = nodeNames[anh[icp][jc]];
      var csign = signNodeNames[namesNode(ncNode[0])];
      ncNode[nc[1]] = "u";
      ncNode[nc[2]] = "w";
      ncNode[nc[3]] = "c";
      ncInv[0] = ics;
      ncInv[nc[1]] = 1;
      ncInv[nc[2]] = 2;
      ncInv[nc[3]] = 3; 
      var snc = [ics,0,ics,1];
      var checkc = (c + snc[nc[3]]) % 2;

      var checku = (sna[na[2]] + snc[nc[1]]) % 2;
      var checkw = (snb[nb[2]] + snc[nc[2]]) % 2;

      for (var id=0; id<12; id++) {
        var ids = id % 2;
        var idp = (id - ids) / 2;
        var nd = [ids,perm[idp][1],perm[idp][2], perm[idp][3]];
        var ndNode = ["","","",""];
        var ndInv = [0,0,0,0];
        var jd = permInv[n2id];
        ndNode[0] = nodeNames[anh[idp][jd]];
        var dsign = signNodeNames[namesNode(ndNode[0])];
        ndNode[nd[1]] = "v";
        ndNode[nd[2]] = "p";
        ndNode[nd[3]] = "d";
        ndInv[0] = ids;
        ndInv[nd[1]] = 1;
        ndInv[nd[2]] = 2;
        ndInv[nd[3]] = 3; 
        var snd = [ids,0,ids,1];
        var checkd = (d + snd[nd[3]]) % 2;

        var checkv = (sna[na[3]] + snd[nd[1]]) % 2;
        var checkp = (snb[nb[3]] + snd[nd[2]]) % 2;

        var chekk = 0;
        var check = checka;
        check *= checkb;
        check *= checkc;
        check *= checkd;
        check *= checku;
        check *= checkv;
        check *= checkw;
        check *= checkp;
// we eliminate patterns with the port 2 connected to a,b,c or d
        if ( na[1] == 2 || nb[1] == 2 || nc[3] == 2 || nd[3] == 2) {check = 0;}
        if ( asign != ias || bsign != ibs || csign != ics || dsign != ids) {check = 0;}

        var blockmoves = "[";
        var blocku = na[2] * nc[1];
        var blockv = na[3] * nd[1];
        var blockw = nb[2] * nc[2];
        var blockp = nb[3] * nd[2];
        var moveshape = "a-" + na[1] + "^b-" + nb[1] + "^c-" + nc[3] + "^d-" + nd[3] + "^";
        moveshape += na[2] + "-" + nc[1] + "^";
        moveshape += na[3] + "-" + nd[1] + "^";
        moveshape += nb[2] + "-" + nc[2] + "^";
        moveshape += nb[3] + "-" + nd[2];
        if (blocku == 3) {
          if (na[2] == 3) { var blockThisMove = naNode[0] + "-" + ncNode[0]; 
          } else { var blockThisMove = ncNode[0] + "-" + naNode[0]; 
          }
          if (blockThisMove == leftName) {
            check = 0; 
          } else { blockmoves += "\"" + blockThisMove + "\",";
          }
        }
        if (blockv == 3) {
          if (na[3] == 3) { var blockThisMove = naNode[0] + "-" + ndNode[0]; 
          } else { var blockThisMove = ndNode[0] + "-" + naNode[0]; 
          }
          if (blockThisMove == leftName) {
            check = 0; 
          } else { blockmoves += "\"" + blockThisMove + "\",";
          }
        }
        if (blockw == 3) {
          if (nb[2] == 3) { var blockThisMove = nbNode[0] + "-" + ncNode[0]; 
          } else { var blockThisMove = ncNode[0] + "-" + nbNode[0]; 
          }
          if (blockThisMove == leftName) {
            check = 0; 
          } else { blockmoves += "\"" + blockThisMove + "\",";
          }
        }
        if (blockp == 3) {
          if (nb[3] == 3) { var blockThisMove = nbNode[0] + "-" + ndNode[0]; 
          } else { var blockThisMove = ndNode[0] + "-" + nbNode[0]; 
          }
          if (blockThisMove == leftName) {
            check = 0; 
          } else { blockmoves += "\"" + blockThisMove + "\",";
          }
        }

        if (check == 1) { 
          counter += 1;
          result += naNode[0] + " " + naNode[1] + " " + naNode[2] + " " + naNode[3] + "^";
          result += nbNode[0] + " " + nbNode[1] + " " + nbNode[2] + " " + nbNode[3] + "^";
          result += ncNode[0] + " " + ncNode[1] + " " + ncNode[2] + " " + ncNode[3] + "^";
          result += ndNode[0] + " " + ndNode[1] + " " + ndNode[2] + " " + ndNode[3] + " , blocks: " + blockmoves + " shape: " + distType(moveshape) + "<br>";
          wholemoveshape += "{left:\"" + n2typ + "\",right:\"" + n1typ + "\",action:\"" + distType(moveshape) + "\", named:\"" + n2typ + "-" + n1typ;
          wholemoveshape += "\", t1:\"" + naNode[0] + "\",t2:\"" + nbNode[0] + "\",t3:\"" + ncNode[0] + "\",t4:\"" + ndNode[0] + "\","; 
          wholemoveshape += "blocks:" + blockmoves +  "]},<br>";
        }
      }
    }
  }
}


document.getElementById("demo").innerHTML = wholemoveshape;

return wholemoveshape;
} 

function chooseleft() {
   n2type = document.getElementById("choiceleft").value;  
}

function chooseright() {
   n1type = document.getElementById("choiceright").value;
}

function chooseType() {
  rhs(n2type,n1type);
}


// uncomment and add a <p id="history"></p> into the rhs.html to get all rewrites.
//var lcont, rcont;

//var accum = "";
//for (lcont=0; lcont<6; lcont++) {
//  var lnode = nodeNames[lcont];
//  for (rcont=0; rcont<6; rcont++) {
//   var rnode = nodeNames[rcont];
//   accum += rhs(lnode,rnode) + "<br>";
//  }
//}

//document.getElementById("history").innerHTML = accum;
