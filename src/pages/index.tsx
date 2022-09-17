import Card from "../components/Card/Card";

const artigos: Object[] = [
  {title: 'Musculação', subtitle: 'É a melhor coisa que há'},
  {title: 'Musculação', subtitle: 'É a melhor coisa que há'},
  {title: 'Musculação', subtitle: 'É a melhor coisa que há'},
  {title: 'Musculação', subtitle: 'É a melhor coisa que há'}
]

export default function Home(){
  return(
    <div>
      <Card 
        articles={artigos.length > 0 ? artigos : undefined}
      />
    </div>
  )
}