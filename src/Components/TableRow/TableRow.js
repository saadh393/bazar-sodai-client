/*  
💥 Title : TableRow
📃 Description : Reuseable Each row of Table
✍ Author : Saad Hasan
⌚ Date : 31/ March/ 2021 
*/

/*  🔥 React Dependencies 🔥 */

const TableRow = ({ cell, styles }) => {
  return (
    <tr>
      {cell &&
        cell.map((data, index) => (
          <td key={index} style={styles && styles}>
            {data}
          </td>
        ))}
    </tr>
  );
};

export default TableRow;
