export default async function Page() {

const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
const data = await res.json()


  return (
    <div>
     
    </div>
  )
}
