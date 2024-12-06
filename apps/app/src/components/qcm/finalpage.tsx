import { Button } from '../ui/button';

const FinalPage = ({ score, total }) => {
  return (
    <div>
      <h2>
        Votre score est de {score} / {total}
      </h2>
      {score === total ? <p> 100% </p> : <></>}
      <Button onClick={() => window.location.reload()}> Recommencer </Button>
    </div>
  );
};

export default FinalPage;
