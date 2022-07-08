from urllib import response
from flask import Flask, jsonify, render_template,request
from flask_cors import CORS
import csv
import prediction
 
# field names


# Initializing flask app
app = Flask(__name__)
CORS(app ,supports_credentials=  True,resources={
    r"/*":{
        "origins":"*"
        
    }
})  
# Route for seeing a data
@app.route('/post', methods=[ 'GET','POST'])
def post():
#save data to db
 
 data = request.get_json()
 name=data['name']
 age=data['age']
 gender=data['gender']
 fields = ['Name', 'Age','Gender']
 rows = [[name,age,gender]]  

 filename = "Dsgn.csv"
 
# writing to csv file
 with open(filename, 'a') as csvfile:
    # creating a csv writer object
     csvwriter = csv.writer(csvfile)
     
    # writing the fields
    #  csvwriter.writerow(fields)
     
    # writing the data rows
     csvwriter.writerows(rows)
 return jsonify( prediction.pretest);
#  question = data['name']
#  answer = data['answer']
#  options = data['options'

@app.route('/pro', methods=[ 'GET','POST'])
def pro():
#save data to db
 data = request.get_json()
 name=data['name']
 problem=data['problem']
 user=data['user']
 time=data['time']
 fields = ['Name', 'Problem','User','Time(sec)']
 rows = [[name,problem,user,time]]  

 filename = "Dsng.csv"
 
# writing to csv file
 with open(filename, 'a') as csvfile:
    # creating a csv writer object
     csvwriter = csv.writer(csvfile)
     
    # writing the fields
    #  csvwriter.writerow(fields)
     
    # writing the data rows
     csvwriter.writerows(rows)
     
 return data;
#  question = data['name']
#  answer = data['answer']
#  options = data['options'

@app.route('/get', methods=[ 'GET'])
def pos():
    
 return jsonify( prediction.pretest);

if __name__ == "__main__":
 app.run(debug=True,port=8080)