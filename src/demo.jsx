

export default function AddStudent() {
    const data = [
        { dataTitle: "№" },
        { dataTitle: "Guruh Nomi" },
        { dataTitle: "O'qtuvchi" },
        { dataTitle: "Kurs Boshlanish Sanasi" },
        { dataTitle: "Kurs Tugash Sanasi" },
        { dataTitle: "Xona Raqami" },
        { dataTitle: "Narx" }
    ]
    return (
        <>
            <div class="container">
                <div className="dataGrid">
                    <table>
                        <tr className="headerTitle">
                            {
                                data.map((item) => (
                                    <td>{item.dataTitle}</td>
                                ))
                            }
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Frontend-167</td>
                            <td>Jalol Imamadinov</td>
                            <td>04/10/2023</td>
                            <td>10/10/2023</td>
                            <td>5</td>
                            <td>750,000</td>
                        </tr>
                    </table>
                </div>
            </div>
        </>
    )
}