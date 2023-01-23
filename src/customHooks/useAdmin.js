const { useState, useEffect } = require("react")

const useAdmin = (email) => {
    const [isAdmin, setIsAdmin] = useState(false);
    const [adminLoading, setAdminLoading] = useState(true);
    useEffect(() => {
        if (email) {
            fetch(`${process.env.REACT_APP_URL}/users/admin/${email}`)
                .then(res => res.json())
                .then(data => {
                    // console.log(data)
                    setIsAdmin(data.isAdmin)
                    setAdminLoading(false)
                })
        }
    }, [email])
    return [isAdmin, adminLoading]
}
export default useAdmin;