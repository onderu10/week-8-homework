
// 1-) Homework-1

const newText = "Hicoders";
const charArr = newText.split(''); //split metodu ile tüm harfleri '' ile ayırıyoruz

const repeatedCharacters = {}; /* tekrar eden harfler için  değişken tanımlıyoruz */

for (let i = 0; i < charArr.length; i++) { // for döngüsü ile tekrar eden harfleri uzunluğu kadar döndürüyoruz
  const char = charArr[i];
 
  if (repeatedCharacters[char]) {
    repeatedCharacters[char]++;
  } else {
    repeatedCharacters[char] = 1;
  }
}

console.log(repeatedCharacters);

// 2-) Homework-2


const movies = [
    { başlık: "Film1", yönetmen: "Yönetmen1", derecelendirme: 7.5 },
    { başlık: "Film2", yönetmen: "Yönetmen2", derecelendirme: 8.2 },
    { başlık: "Film4", yönetmen: "Yönetmen3", derecelendirme: 6.8 },
    { başlık: "Film5", yönetmen: "Yönetmen3", derecelendirme: 7.3 },
    { başlık: "Film6", yönetmen: "Yönetmen3", derecelendirme: 9.1 },
    { başlık: "Film7", yönetmen: "Yönetmen3", derecelendirme: 5.4 },
    { başlık: "Film8", yönetmen: "Yönetmen3", derecelendirme: 6.0 },
    { başlık: "Film9", yönetmen: "Yönetmen3", derecelendirme: 4.5 },
   
  ];
  
 
  
  const highRatedMovies = [];
  
  for (let i = 0; i < movies.length; i++) { // for döngüsü ile objelerin içinde  length kadar dönüyoruz 
    const movie = movies[i]; 
    if (movie.rating > 8.0) { // if ile derecelendirme 8 den büyük ise oluşturduğumuz boş değişkene push ediyoruz
      highRatedMovies.push(movie);
    }
  }
  
  console.log(highRatedMovies); // konsolda yazdırıyoruz.
  
  