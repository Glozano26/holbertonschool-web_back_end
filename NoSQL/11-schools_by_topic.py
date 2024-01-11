#!/usr/bin/env python3
"""Write a Python function that returns the list of
school having a specific topic:
- mongo_collection will be the pymongo collection object
- topic (string) will be topic searched
"""


def schools_by_topic(mongo_collection, topic) -> list:
    """returns a list with a specific topic"""
    return [x for x in mongo_collection.find({'topics': topic})]
