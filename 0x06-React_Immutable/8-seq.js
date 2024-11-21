import { Seq, Map } from 'immutable';

export default function printBestStudents(inputObject) {
  const new_Map = Map(inputObject);
  const lazy_Seq = Seq(new_Map);
  const grades_Object = lazy_Seq.filter((value) => value.score > 70).map((value) => (
    value.firstName.toUpperCase()
    // value.lastName.toUpperCase()
  ));
  console.log(grades_Object);
}
