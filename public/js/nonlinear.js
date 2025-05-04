(function() {
  const POSITIONING = {"mind-palacetop":"1764px","getting-lostleft":"1591px","directional-connectionsleft":"1125px","sherlock-mind-palaceleft":"783px","as-mind-palacestop":"1766px","dwarf-fortressleft":"631px","drawing-as-mind-palacetop":"3203px","getting-losttop":"936px","no-getting-losttop":"728px","essays-reflect-cognitiontop":"719px","no-getting-lostleft":"1290px","as-mind-palacesleft":"628px","better-for-learningleft":"708px","mind-mapstop":"1770px","exportable-mind-palacesleft":"730px","as-mind-mapstop":"1294px","exportable-mind-palacestop":"2012px","mind-mapsleft":"2074px","mind-palaceleft":"88px","prostop":"727px","prosleft":"621px","mind-map-anecdoteleft":"2078px","better-for-sidenotestop":"139px","dwarf-fortresstop":"2309px","no-glue-sentencestop":"1102px","drawing-as-mind-palaceleft":"483px","mind-palace-tedtop":"2450px","mind-palace-examplesleft":"89px","as-mind-mapsleft":"2074px","museum-designtop":"2811px","essays-reflect-cognitionleft":"81px","mind-palace-examplestop":"2818px","nonlinearity-of-cognitiontop":"99px","sherlock-mind-palacetop":"2818px","presentationleft":"614px","presentationtop":"1251px","mind-palace-tedleft":"88px","nonlinearity-of-cognitionleft":"81px","minecraft-as-mind-palaceleft":"14px","better-for-sidenotesleft":"1775px","no-glue-sentencesleft":"1290px","atomic-nodesleft":"1612px","no-strict-orderleft":"1129px","no-strict-ordertop":"1769px","museum-designleft":"596px","directional-connectionstop":"2230px","better-for-persuasionleft":"1214px","mind-map-anecdotetop":"2179px","minecraft-as-mind-palacetop":"3080px","atomic-nodestop":"1770px","better-for-persuasiontop":"130px","better-for-learningtop":"249px"};

  const connections = [];
  const nodes = document.querySelectorAll(".node");
  for (const node of nodes) {
    dragElement(node);
    node.style.top = localStorage.getItem(node.id+"top") ?? "0";
    node.style.left = localStorage.getItem(node.id+"left") ?? "0";

    const outConnections = node.querySelectorAll(".node-link, .content-link");
    for (const link of outConnections) {
      destinationId = link.href.split("#")[1];
      const linkDestination = document.getElementById(destinationId);

      let connection;
      if (link.classList.contains("node-link")) {
        connection = new LeaderLine(node, linkDestination, {path: "fluid"});

        if (linkDestination.tagName === "ASIDE") {
          connection.setOptions({dash: true, color: "rgba(255, 127, 80, .5)"});
        }

      } else if (link.classList.contains("content-link")) {
        connection = new LeaderLine(link, linkDestination, {color: "rgba(0, 0, 255, 0.25)"});
        connection.hide();

        const showConn = e => connection.show();
        const hideConn = e => connection.hide();

        link.addEventListener("mouseover", showConn);
        link.addEventListener("mouseout", hideConn);
        link.addEventListener("click", e => {
          connection.show();
          link.removeEventListener("mouseover", showConn);
          link.removeEventListener("mouseout", hideConn);
        })
      }
      connections.push(connection);
    }
  }

  function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById(elmnt.id + "header")) {
      // if present, the header is where you move the DIV from:
      document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
    } else {
      // otherwise, move the DIV from anywhere inside the DIV:
      elmnt.onmousedown = dragMouseDown;
    }
  
    function dragMouseDown(e) {
      e = e || window.event;
      e.preventDefault();
      // get the mouse cursor position at startup:
      pos3 = e.clientX;
      pos4 = e.clientY;
      document.onmouseup = closeDragElement;
      // call a function whenever the cursor moves:
      document.onmousemove = elementDrag;
    }
  
    function elementDrag(e) {
      e = e || window.event;
      e.preventDefault();
      // calculate the new cursor position:
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;
      // set the element's new position:
      elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
      elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";

      localStorage.setItem(elmnt.id+"top", elmnt.style.top);
      localStorage.setItem(elmnt.id+"left", elmnt.style.left);

      for (const connection of connections) {
        connection.position();
      }
    }
  
    function closeDragElement() {
      // stop moving when mouse button is released:
      document.onmouseup = null;
      document.onmousemove = null;
    }
  }
})();