#!/usr/bin/env python3
"""Write a Python function that changes all topics
of a school document based on the name:
- mongo_collection will be the pymongo collection object
- name (string) will be the school name to update
- topics (list of strings) will be the list of topics approached in the school
"""


def update_topics(mongo_collection, name, topics):
    """Change school topics"""
    filter = {'name': name}
    update = {'$set': {'topics': topics}}
    topics_upd = mongo_collection.update_many(filter, update)
