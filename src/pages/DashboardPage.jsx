import MainLayout from "../components/layouts/MainLayouts"

const DashboardPage = () => {
    return (
        <MainLayout>
            <div className="w-full">
            <main className="px-4 py-4 lg:px-6 lg:py-6 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    <div>
                        <div className="text-lg text-gray-02 mb-2">Title1</div>
                        <div className="bg-white rounded-lg px-6 py-5 shadow-lg">widget 1</div>
                    </div>
                    <div>
                        <div className="text-lg text-gray-02 mb-2">Title2</div>
                        <div className="bg-white rounded-lg px-6 py-5 shadow-lg">widget 2</div>
                    </div>
                    <div>
                        <div className="text-lg text-gray-02 mb-2">Title3</div>
                        <div className="bg-white rounded-lg px-6 py-5 shadow-lg">widget 3</div>
                    </div>
                    <div>
                        <div className="text-lg text-gray-02 mb-2">Title4</div>
                        <div className="bg-white rounded-lg px-6 py-5 shadow-lg">widget 4</div>
                    </div>
                    <div className="lg:col-span-2">
                        <div className="text-lg text-gray-02 mb-2">Title5</div>
                        <div className="bg-white rounded-lg px-6 py-5 shadow-lg">widget 5</div>
                    </div>
                    <div className="hidden lg:block"></div>
                    <div className="lg:col-span-2">
                        <div className="text-lg text-gray-02 mb-2">Title6</div>
                        <div className="bg-white rounded-lg px-6 py-5 shadow-lg">widget 6</div>
                    </div>
                </main>
            </div>
        </MainLayout>
    )
}

export default DashboardPage