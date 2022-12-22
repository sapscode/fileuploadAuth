const signout = async (req, res) => {
	try{
    res.clearCookie("token");
    return res.status(200).json({ message: "Signed out successfully" });
  } catch (err) {
    console.log(err.message);
    return res.status(500).json({ err: err.message });
  }
};

module.exports = signout;
