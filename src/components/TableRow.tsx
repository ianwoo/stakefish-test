type Props = {
  data: any;
};

// const formatTimestamp = (num: string | number) => {
//   const format1 = "YYYY/MM/DD HH:mm:ss";
//   const d = parseInt(num + "000");
//   return dayjs(d).format(format1);
// };

function TableRow(props: Props) {
  const { data } = props;

  const columns = () => {
    const elements = [];
    for (const key in data) {
      if (Object.prototype.hasOwnProperty.call(data, key)) {
        const columnData = data[key];

        switch (key) {
          //the pattern for this shared component is to custom render any data incoming by *property name*
          //this keeps the core rendering very clean and simple: you just see the data, and that's it
          //while all the nitty gritty of rendering specific types of data can be stashed here
          case "logo":
            elements.push(
              <div className="col logo" key={key}>
                <img src={columnData} alt={columnData} />
              </div>
            );
            break;
          default:
            elements.push(
              <div className="col" key={key}>
                {columnData}
              </div>
            );
        }
      }
    }
    return elements;
  };

  return (
    <div className="row-wrapper">
      <div className="table-row">{columns()}</div>
    </div>
  );
}

export default TableRow;
