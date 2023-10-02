export default function getStudentIdsSum(array) {
    if (!(Array.isArray(array)))
      return [];
    return array.reduce((accumulator, element) => accumulator + element.id, 0);
}
