const restrictToAdmins = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({
        status: false,
        message: `You don't have permission to access this route`
      })
    }
    next();
  };
};

module.exports = restrictToAdmins;
