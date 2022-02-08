from  flask import Flask
app = Flask(__name__)


@app.route('/api/time')
def get_current_time():
    return {'time': time.time()}

# members API Route
@app.route("/members")
def members():
    return {"members": ["User1",
                        "User2",
                        "User3"]}
    
if __name__ == "__main__":
    app.run(debug=True)