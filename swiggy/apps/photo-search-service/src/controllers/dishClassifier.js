const tf = require('@tensorflow/tfjs');
const fs = require('fs');

const classifyDish = async (imagePath) => {
    const model = await tf.loadLayersModel('file://../../ml-model/food_model/model.json');
    const imageBuffer = fs.readFileSync(imagePath);
    const imageTensor = tf.node.decodeImage(imageBuffer).resizeNearestNeighbor([224, 224]).toFloat().expandDims();
    const predictions = model.predict(imageTensor).dataSync();

    const labels = fs.readFileSync('../../ml-model/labels.txt', 'utf-8').split('\\n');
    const topPrediction = predictions.indexOf(Math.max(...predictions));

    return labels[topPrediction];
};

module.exports = { classifyDish };
