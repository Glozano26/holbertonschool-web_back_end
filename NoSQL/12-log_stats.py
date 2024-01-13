#!/usr/bin/env python3
"""Write a Python script that provides some stats about Nginx logs
stored in MongoDB:"""
from pymongo import MongoClient


if __name__ == "__main__":
    client = MongoClient('mongodb://127.0.0.1:27017')

    nginx = client.logs.nginx

    count = nginx.count_documents({})
    print(f'{count} logs')

    methods = ["GET", "POST", "PUT", "PATCH", "DELETE"]

    print("Methods:")

    for method in methods:
        count = nginx.count_documents({'method': method})
        print(f'\tmethod {method}: {count}')

    status_check = nginx.count_documents({'method': 'GET', 'path': '/status'})
    print(f'{status_check} status check')
