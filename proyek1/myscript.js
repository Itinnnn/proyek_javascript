function fizzBuzz(num) {

    // Menampilkan Angka 1 sampai 100 Dengan Menggunakan Perulangan For

  for (var i = 1; i <= num; i++) {

        // Jika angka merupakan kelipatan 3 dan 5, maka akan menampilkan "FizzBuzz"

      if (i % 15 === 0) {

          console.log("FizzBuzz");

      }

        // Jika angka merupakan kelipatan 3, maka akan menampilkan "Fizz"

      else if (i % 3 === 0) {

          console.log("Fizz");

      }

        // Jika angka merupakan kelipatan 5, maka akan menampilkan "Buzz"

      else if (i % 5 === 0) {

          console.log("Buzz");

      }

        // Selain angka yang berkelipatan 3 dan 5, maka akan menampilkan angka

      else {

          console.log(i);

      }

  }

}

fizzBuzz(100);