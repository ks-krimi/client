import {
  CardActions,
  CardContent,
  Card as MCard,
  Typography,
} from "@material-ui/core";
import Delete from "./Delete";
import RendreLibre from "./RendreLibre";
import RendreOccuper from "./RendreOccuper";

function Card({ materiel }) {
  return (
    <MCard variant="outlined" style={{ position: "relative", minWidth: 250 }}>
      <CardContent>
        <Typography variant="h6">{materiel.serie}</Typography>
        <Typography variant="caption" component="p">
          Type: {materiel.detail.type}
        </Typography>
        <Typography variant="caption" component="p">
          Marque: {materiel.detail.marque}
        </Typography>
        {materiel.user && (
          <Typography variant="caption" component="p">
            User: {materiel.user.nom} {materiel.user.prenom}
          </Typography>
        )}
      </CardContent>
      <CardActions>
        {materiel.user ? (
          <RendreLibre id={materiel.id} />
        ) : (
          <RendreOccuper materiel={materiel} />
        )}
        {materiel.user ? null : <Delete id={materiel.id} />}
      </CardActions>
    </MCard>
  );
}

export default Card;
