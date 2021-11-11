import { CardContent, Card as MCard, Typography } from "@material-ui/core";
import PopOver from "./PopOver";

function Card({ user }) {
  return (
    <MCard variant="outlined" style={{ position: "relative", minWidth: 250 }}>
      <CardContent>
        <Typography variant="subtitle1">{user.nom}</Typography>
        <Typography variant="subtitle2" component="p">
          {user.prenom}
        </Typography>
        <Typography variant="caption" component="p">
          Nombre de materiel utiliser: {user.materiels?.length}
        </Typography>
      </CardContent>
      <PopOver user={user} />
    </MCard>
  );
}

export default Card;
