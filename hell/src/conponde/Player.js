
function Player(props) {
    const {Image,Name,Team,Nationality,JersyNamber,Age} = props;
   return(
       < div >
      <div    > 
    <img  class='ii' src={Image}></img>
   <h5>Name:{Name}</h5>
<h5>Team:{Team}</h5>
<h5> Nationality:{Nationality}</h5>
<h5>JersyNamber:{JersyNamber}</h5>
<h5>Age:{Age}</h5>
</div>
    </div>
    );
}
export default Player;