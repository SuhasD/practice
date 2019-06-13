  function prettyJSON(A){
      var indend = '';
      var output = [];
      var line = '';
      for (var i = 0; i < A.length; i++) {
        var char = A.charAt(i);
        if (char === '{' || char === '[') {
          if (line !== '' && line != indend) output.push(line);
          output.push(indend + char);
          indend += "\t";
          line = indend;
    
        }
        else if (char === '}' || char === ']') {
          if (line !== '' && line != indend) output.push(line);
          indend = indend.slice(0, -1);
          if (A.charAt(i + 1) === ',') {
            char += ',';
            i++;
          }
          output.push(indend + char);
          line = indend;
        }
        else if (char === ',') {
          line += char;
          output.push(line);
          line = indend;
        }
        else {
          line += char;
        }
      }
      return output;
    }
