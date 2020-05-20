let str = prompt("enter the string");
        let result;
        // Javascript strings have no reverse function.
        //  You'll have to reverse the array before joining it together into a string:
        function rev()
        {
          result = str.split('').reverse().join('');
          console.log(result);
          return result;
        }