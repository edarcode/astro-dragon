export default function MovieDetail({ setIsDetails }: Props) {
  return (
    <div>
      Detail
      <button onClick={() => setIsDetails(false)}>Volver</button>
    </div>
  );
}

type Props = {
  setIsDetails: any;
};
