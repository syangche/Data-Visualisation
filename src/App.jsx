import './App.css';

export default function Dashboard() {
  return (
    <main className="main">
      <h1>Sales Analytics Dashboard</h1>

      <div className="grid">
        <section className="card">
          <h2>Monthly Sales Performance</h2>
          <div className="chartContainer" id="monthly-sales-chart">
            {/* Chart will go here */}
          </div>
        </section>

        <section className="card">
          <h2>Product Category Distribution</h2>
          <div className="chartContainer" id="product-category-chart">
            {/* Chart will go here */}
          </div>
        </section>

        <section className="card">
          <h2>Customer Acquisition</h2>
          <div className="chartContainer" id="customer-acquisition-chart">
            {/* Chart will go here */}
          </div>
        </section>

        <section className="card">
          <h2>Weekly Visitors</h2>
          <div className="chartContainer" id="weekly-visitors-chart">
            {/* Chart will go here */}
          </div>
        </section>
      </div>
    </main>
  );
}

