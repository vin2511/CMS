import Content from "../model/contentModel.js";

export const getContent = async (req, res) => {
    const info = await Content.find();
    res.status(200).json(info)
}

export const addContent = async (req, res) => {
    const { title, body, author, category, tags } = req.body;
    const newInfo = new Content({ title, body, author, category, tags });

    await newInfo.save()
        .then((content) => {
            res.status(201).json({ message: "Content Added Successfully", content });
        })
        .catch((error) => {
            res.status(500).json({ error: error.message })
        });
}

export const updateContent = async (req, res) => {
    const id = req.params.id;
    const { title, body } = req.body;

    Content.findByIdAndUpdate(id, { title, body }, { new: true })
        .then((content) => {
            res.json(content);
        })
        .catch((error) => {
            res.status(500).json({ error: error.message })
        })
}

export const delContent = async (req, res) => {
    Content.findByIdAndDelete(req.params.id)
        .then(() => {
            res.json({ message: 'Content Deleted' });
        })
        .catch((error) => {
            res.status(500).json({ error: error.message });
            console.log("error: ", error);
        })
} 
 export const getBycategory  = async(req,res) => {

    Content.findByCategory(req.body.category)
      .then((content) => {
        console.log(`Content with category '${category}':`, content);
      })
      .catch((error) => {
        console.error('Error retrieving content:', error);
      }); 
 }
 