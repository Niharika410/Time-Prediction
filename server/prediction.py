import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn import metrics
from sklearn.linear_model import LinearRegression
from sklearn.metrics import mean_squared_error, r2_score
from sklearn.preprocessing import LabelEncoder

# reading two csv files
data1 = pd.read_csv('Dsgn.csv')
data2 = pd.read_csv('Dsng.csv')
  
# using merge function by setting how='inner'
# output1 = pd.merge(data1, data2, on='Name', how='inner')
  
#  displaying result

merged_data = data1.merge(data2,on=["Name"])
data=merged_data


category= ['Name','Problem', 'User', 'Time(sec)'] 
encoder= LabelEncoder()
for i in category:   
   data[i] = encoder.fit_transform(data2[i])

# data.Time(sec).isnull().sum()
data. shape
feature_col = ['Problem']
target = ['Time(sec)']
X = data[feature_col]
print(X.shape)
y = data[target]
print(y.shape)

X_train, X_test, y_train, y_test = train_test_split(X, y, random_state = 1)
print(X_train.shape)
print(X_test.shape)
print(y_train.shape)
print(y_test.shape)

X_predict_train = X[:-100]
X_predict_test = X[-100:]

# Split the targets into training/testing sets
y_predict_train = y[:-100]
y_predict_test = y[-100:]

logreg=LinearRegression()
logreg.fit(X,y)
a=logreg.predict(X)

pretest=mean_squared_error(y_predict_test, a)

# print("Coefficients: \n", logreg.coef_)
print("Prediction of time: %.2f" %pretest )
# The coefficient of determination: 1 is perfect prediction
print("Coefficient of determination: %.2f" % r2_score(y_predict_test, a))