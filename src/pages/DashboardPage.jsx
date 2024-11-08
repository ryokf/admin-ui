import MainLayout from "../components/layouts/MainLayouts"

const DashboardPage = () => {
    return (
        <MainLayout>
            <div className="w-full">
            <main className="px-4 py-4 lg:px-6 gap-y-12 lg:py-6 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    <div className="h-full">
                        <div className="text-lg text-gray-02 mb-2">Total balance</div>
                        <div className="bg-white rounded-lg px-6 py-5 shadow-lg h-full">widget 1</div>
                    </div>
                    <div className="h-full">
                        <div className="text-lg text-gray-02 mb-2">Goals</div>
                        <div className="bg-white rounded-lg px-6 py-5 shadow-lg h-full">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam porro ut, dolor accusantium harum voluptatem tempora ex pariatur nemo necessitatibus doloribus quidem, quibusdam temporibus corporis. Quaerat libero enim ullam neque.</div>
                    </div>
                    <div className="h-full">
                        <div className="text-lg text-gray-02 mb-2">Upcoming bill</div>
                        <div className="bg-white rounded-lg px-6 py-5 shadow-lg h-full">widget 3</div>
                    </div>
                    <div className="lg:row-span-2">
                        <div className="text-lg text-gray-02 mb-2">recent transaction</div>
                        <div className="bg-white rounded-lg px-6 py-5 shadow-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, laudantium aliquid obcaecati, rerum cumque et reiciendis suscipit numquam facilis eligendi voluptates fugit perspiciatis temporibus error quisquam mollitia ipsam labore sapiente!</div>
                    </div>
                    <div className="lg:col-span-2">
                        <div className="text-lg text-gray-02 mb-2">statistic</div>
                        <div className="bg-white rounded-lg px-6 py-5 shadow-lg">widget 5</div>
                    </div>
                    <div className="lg:col-span-2">
                        <div className="text-lg text-gray-02 mb-2">Expenses breakdown</div>
                        <div className="bg-white rounded-lg px-6 py-5 shadow-lg">widget 6</div>
                    </div>
                </main>
            </div>
        </MainLayout>
    )
}

export default DashboardPage