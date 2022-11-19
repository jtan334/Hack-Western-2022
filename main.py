import cohere
from transformers import pipeline, set_seed

def addStoryToPrompt(prompt, addition, storyType):
    prompt = prompt + addition + "\n--\n" + "genre: " + storyType 
    return prompt

def addActionToStory(prompt, story, addition, storyType):
    prompt = prompt + story +" "+ addition + "\n--\n" + "genre: " + storyType 
    return prompt

def main():
    
    co = cohere.Client('LZHrKHGZUJxhI7trs3ZjRiCz4yYnD3lyznOOS0nA')
    prompt = ""
    block = ""
    storyType = "fantasy"
    # opens the files that corresponds with the story type 
    with open((storyType + ".txt"), "r") as f:
        prompt = prompt + f.read().strip()

    #generates a story using a high level of temp 
    response = co.generate(  
    model='xlarge',  
    prompt = prompt,  
    max_tokens=70,  
    temperature=0.9,  
    stop_sequences=["--"])

    story = response.generations[0].text
    
    print(story.replace('story:', '').replace('\n', ''))
    
    # prompt = addStoryToPrompt(prompt, story, storyType)
    
    #print(prompt)
    
    storyline = "This program generates a continuation of the story\n"+ "genre: " + storyType + "\n story: " + story + "\n--\n"
    storyline = "This program generates a continuation of the story\n"+ "genre: " + storyType + "\n story: " + story + "\n--\n"
    
    storyline = story
    
    while True:
        action = input("what would you like to do: ")

        # storyline = addActionToStory(storyline, story, action, storyType)
        
        if action == "q":
            break
        
        storyline = storyline + " " + action
        #print(storyline)
        
        response = co.generate(  
        model='xlarge',  
        prompt = storyline,  
        max_tokens=30,  
        temperature=0.3,  
        stop_sequences=["--"], 
        presence_penalty= 0.2)

        story = response.generations[0].text
        
        print(story.replace('story:', '').replace('\n', ''))

        storyline = storyline + " " + story
        #print(story)
    
    print(storyline)
main()
