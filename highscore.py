from flask import Flask, jsonify, request

app = Flask(__name__)

high_scores = []

@app.route('/get_high_scores', methods=['GET'])
def get_high_scores():
    return jsonify(high_scores)

@app.route('/submit_score', methods=['POST'])
def submit_score():
    score = request.json.get('score')
    high_scores.append(score)
    return jsonify({"message": "Score saved successfully!"}), 200

if __name__ == "__main__":
    app.run(debug=True)
