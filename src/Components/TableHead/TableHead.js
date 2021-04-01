/*  
💥 Title : tHead
📃 Description : This is Simple Reuseable Table Head Component 
✍ Author : Saad Hasan
⌚ Date : 31/ March/ 2021 
*/

/*  🔥 React Dependencies 🔥 */

const TableHead = ({ columns }) => {
  return (
    <>
      <thead>
        <tr>{columns && columns.map((col, index) => <TH value={col} key={index} />)}</tr>
      </thead>
    </>
  );
};

const TH = ({ value }) => <th scope="col">{value}</th>;

export default TableHead;
