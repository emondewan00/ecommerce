import LinkButton from "@/components/atoms/Button/LinkButton";

const OrderPage = () => {
  return (
    <div className="w-full">
      <table className="w-full">
        <caption className="text-left text-lg font-bold text-slate-800">
          Orders
        </caption>
        <thead>
          <tr className=" text-left">
            <th>Order</th>
            <th>Date</th>
            <th>Status</th>
            <th>Total</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody className="*:border-b">
          <tr className="text-gray-700">
            <td>#12345</td>
            <td>12/1/2024</td>
            <td>pending</td>
            <td>$20.00</td>
            <td>
              <LinkButton text={"View"} url={"/"} />
            </td>
          </tr>
          <tr className="text-gray-700">
            <td>#12345</td>
            <td>12/1/2024</td>
            <td>pending</td>
            <td>$20.00</td>
            <td>
              <LinkButton text={"View"} url={"/"} />
            </td>
          </tr>
          <tr className="text-gray-700">
            <td>#12345</td>
            <td>12/1/2024</td>
            <td>pending</td>
            <td>$20.00</td>
            <td>
              <LinkButton text={"View"} url={"/"} />
            </td>
          </tr>
          <tr className="text-gray-700">
            <td>#12345</td>
            <td>12/1/2024</td>
            <td>pending</td>
            <td>$20.00</td>
            <td>
              <LinkButton text={"View"} url={"/"} />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default OrderPage;
