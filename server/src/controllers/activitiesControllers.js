const {createActivity, getAllActivities} = require ('../handlers/activitiesHandler')

//crear Actividad
const postActivity = async (req, res) => {
    try {
      const { name, difficulty, duration, season, countries } = req.body;
      const newActivity = await createActivity(name, difficulty, duration, season, countries);
      res.status(201).json(newActivity);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  };

// Traer todas las actividades
  const getAllCountriesActivities = async (req, res) => {
    try {
        const activities = await getAllActivities()
        if (activities) {
            return res.status(200).json({ status: true, results: activities })

        } else {
            return res.status(200).json({ status: false, message: 'No se pudieron obtener las actividades' })
        }
    } catch (error) {
        res.status(500).json({ status: false, message: error.message })
    }
}


module.exports = {
    postActivity,
    getAllCountriesActivities
}