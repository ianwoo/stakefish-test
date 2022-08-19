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
          case "example-data-name":
            elements.push(
              <div className="col example-data-name" key={key}>
                {columnData}
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
