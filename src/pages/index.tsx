import Card from "../components/Card/Card";
import Footer from "../components/Footer/Footer";
import Topbar from "../components/Topbar/Topbar";

const artigos: Object[] = [
  {title: 'Musculação', subtitle: 'É a melhor coisa que há'},
  {title: 'Musculação', subtitle: 'É a melhor coisa que há'},
  {title: 'Musculação', subtitle: 'É a melhor coisa que há'},
  {title: 'Musculação', subtitle: 'É a melhor coisa que há'}
]

export default function Home(){
  return(
    <div>
      <Topbar />
      <Card 
        articles={artigos.length > 0 ? artigos : undefined}
        />
      <Footer />
    </div>
  )
}