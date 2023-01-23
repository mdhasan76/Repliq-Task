const { useState, useEffect } = require("react")

const useAdmin = (email) => {
    const [isAdmin, setIsAdmin] = useState(false);
    const [adminLoading, setAdminLoasding] = useState(true);
    useEffect(() => {
        if (email) {
            fetch(`${process.env.REACT_APP_URL}/users/${email}`)
                .then(res => res.json())
                .then(data => {
                    // console.log(data)
                    setIsAdmin(data.type)
                    setAdminLoasding(false)
                })
        }
    }, [email])
    return [isAdmin, adminLoading]
}
export default useAdmin;