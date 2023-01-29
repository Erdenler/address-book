import User from './user';


const friends = [{
  id: 1,
  name: "sevginaz",
},
{
  id: 2,
  name: "fatih",
},
{
  id: 3,
  name: "ahmet",
},
];

function App() {
  // return React.createElement('div',null,"") zor oluyo
  return (
    <div>
      <User
        name=" Erden"
        surname="Erdenler"
        isLoggedIn={true}
        age={22}
        friends={friends}
        address={{
          title: "Beşiktaş/İstanbul",
          zip: 34567
        }}
      />
    </div>

  );

}

export default App;


