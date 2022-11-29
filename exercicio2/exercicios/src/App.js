import { ChakraProvider } from '@chakra-ui/react'
import Card from "./components/Card";

export default function App () {

  const App = 
  
  [{
    "name": "Gato Siberiano",
          "vida": "15 anos",
      "image": "https://fotos.amomeupet.org/uploads/fotos/1600978078_5f6cfc9ebe445_hd.jpeg",

  
  },
  {
    "name": "Gato Bengala",
          "vida": "15 anos",
      "image": "https://fotos.amomeupet.org/uploads/fotos/1600978905_5f6cffd9a7632_hd.jpg",
  
  },
  {
    "name": "Gato Somali",
      "vida": "15 anos",
      "image": "https://fotos.amomeupet.org/uploads/fotos/1600979594_5f6d028ab921b_hd.jpeg",
  
  },
  {
    "name": "Gato British Shorthair",
        "vida": "13 anos",
      "image": "https://fotos.amomeupet.org/uploads/fotos/1600980656_5f6d06b0c96fd_hd.jpeg",
  
  },
  {
    "name": "Gato Bombay",
        "vida": "12 a 16 anos",
      "image": "https://fotos.amomeupet.org/uploads/fotos/1600979006_5f6d003e17d69_hd.jpeg",
  
  },
  {
    "name": "Gato Frajola",
          "vida": "20 anos",
      "image": "https://static1.patasdacasa.com.br/articles/7/49/77/@/20778-o-gato-frajola-ou-tuxedo-cat-e-super-bri-articles_media_desktop-1.jpg",
  
  },
  {
    "name": "Gato British Longhairm",
          "vida": "13 anos",
      "image": "https://fotos.amomeupet.org/uploads/fotos/1600979227_5f6d011b02a7c_hd.jpeg",
  
  }]

  return (
    <ChakraProvider>
      {App.map((App)=>{
        return <Card key={App.id} user={App}/>
      })}
   
    </ChakraProvider>
  );
}

