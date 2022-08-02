

module.exports = function toReadable(number) {
   let sotie = '';
   let s = ';'
   let desitie = '';
   function twoRaz(number) {
      if (number == 0) {
         return ''
      }
      if (number < 10) {
         return offer(number)
      }

      if ((Math.trunc(number / 10)) == 1) {

         return offer(number)
      }
      if ((Math.trunc(number / 10)) == 2) {
         desitie = 'twenty';
         return secondary(number, desitie);
      }

      if ((Math.trunc(number / 10)) == 3) {

         desitie = 'thirty';
         return secondary(number, desitie);
      }

      if ((Math.trunc(number / 10)) == 4) {
         desitie = 'forty';
         return secondary(number, desitie);
      }

      if ((Math.trunc(number / 10)) == 5) {
         desitie = 'fifty';
         return secondary(number, desitie);
      }

      if ((Math.trunc(number / 10)) == 6) {
         desitie = 'sixty';
         return secondary(number, desitie);
      }

      if ((Math.trunc(number / 10)) == 7) {
         desitie = 'seventy';
         return secondary(number, desitie);
      }

      if ((Math.trunc(number / 10)) == 8) {
         desitie = 'eighty';
         return secondary(number, desitie);
      }

      if ((Math.trunc(number / 10)) == 9) {
         desitie = 'ninety';
         return secondary(number, desitie);
      }
   }

   function offer(number) {
      if (number < 20) {
         if (number == 0) s = 'zero';
         if (number == 1) s = 'one';
         if (number == 2) s = 'two';
         if (number == 3) s = 'three';
         if (number == 4) s = 'four';
         if (number == 5) s = 'five';
         if (number == 6) s = 'six';
         if (number == 7) s = 'seven';
         if (number == 8) s = 'eight';
         if (number == 9) s = 'nine';
         if (number == 10) s = 'ten';
         if (number == 11) s = 'eleven';
         if (number == 12) s = 'twelve';
         if (number == 13) s = 'thirteen';
         if (number == 14) s = 'fourteen';
         if (number == 15) s = 'fifteen';
         if (number == 16) s = 'sixteen';
         if (number == 17) s = 'seventeen';
         if (number == 18) s = 'eighteen';
         if (number == 19) s = 'nineteen';



      };
      return s;
   }
   function log() {

      console.log('habra');
   }


   function secondary(number, desitie) {


      for (let i = 0; i <= 9; i++) {

         if (number % 10 == i) {
            if (i == 0) {
               return s = desitie;
            }

            s = desitie + ' ' + offer(i);
            return s;
         }
      }

   };

   function hausend(number) {
      let hun = '';
      hun = number % 100;
      console.log(hun);
      if (hun == 0) {

         for (let i = 0; i <= 9; i++) {
            if ((Math.trunc(number / 100)) == i) {
               s = offer(i) + ' hundred'
            }
         }

         return s
      }

      for (let i = 0; i <= 9; i++) {
         if ((Math.trunc(number / 100)) == i) {



            s = offer(i) + ' hundred ' + twoRaz(hun);
         }
      }

      return s;
   }







   let a = '';
   let q = offer(number);

   if ((number > 19) && (number < 100)) {
      twoRaz(number)
   }


   if ((number > 99) && (number < 1000)) {
      s = hausend(number);
   }





   return s


}
console.log(module.exports(990))