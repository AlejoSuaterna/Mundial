import Partidos from "../Partidos";
import Item from "../../Item";

export default function PartidosList(props){

    return(
        <div class="row">
        <h2>Equipos</h2>
        {props.data.map(cerv=>
        <div class="col " align="center">
            <Item equipo={cerv.equipo}/>
        </div>)
        }
    </div>    )
}